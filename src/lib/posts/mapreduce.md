---
date: 1706055000
topic: Theory
description: "A quick explainer on the motivations and goals of the MapReduce approach to distributed computing."
url: mapreduce
---
# MapReduce

Suppose you have a massive amount of data. Think: multiple terabytes or more. This data could come from anywhere. Application logs, user events, and sensor readings can all generate surprisingly large volumes of data. What if you wanted to run some functions over this data, to process or transform it into something you can use, for analytics or product purposes? In comes MapReduce.

MapReduce is a programming paradigm that enables distributed data processing. It enables the programmer to scale their processing operations from a single core on a single computer, to running on thousands of computers in data centers spanning the globe. The MapReduce paradigm emerged in Google in 2004, and was used internally to parallelize and scale their data processing workloads to massive scale.

MapReduce’s architecture was inspired by functional languages such as Lisp, taking the higher-order functions of `map` and `reduce` (big surprise, I know), and applying them to the distributed data processing problem. These functions are now available in a wide variety of non-functional languages, and you may be familiar with them. `map` takes an array of data, and applies a function to each element. It’s similar to a `for` loop, where each iteration of the loop runs in relative isolation. Here’s a quick example, in JavaScript, of how we can use `map` to calculate the square of each number in an array. 

```js
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(num) {
    return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

Similarly, `reduce` also works on arrays to accumulate a result by iterating and applying a function on each element of the array. This effectively “reduces” each element into the “accumulator”, and returns the result. For example, the sum of elements in an array can be calculated through a `reduce` call:

```js
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0 /* Start with sum=0 */ );

console.log(sum); // Output: 15
```

## How MapReduce naturally parallelizes programs

Well  `map` and `reduce` may be cool, but what role do they have in actually speeding up and parallelizing computation?

The key to MapReduce is the observation that any computation that’s expressed as a `map`, followed by a `reduce` can be made massively parallel by *sharding* the data and running multiple `map` ”workers” in parallel. These workers can be on different cores in the same machine, different machines on the same network, or on machines running at opposite ends of the globe. Once all the `map` operations complete, a single `reduce` worker aggregates all the data and computes a final result.

More specifically, the MapReduce paper outlines a key-value based method to organize and batch together streams of data. Each `map` is given some input data, and outputs a `(topic, value)` pair. Once all the data for a given topic is produced, a `reduce` is run over all the data sharing the same topic. Thus, we have a 1-to-1 relationship between number of topics and number of reducers. If most of the expensive computation for a task is done in the `map` step, then we can massively speedup our computations by creating hundreds or thousands of mappers, as appropriate.

The paper gives a few examples, such as log processing, word counting, distributed `grep`-ing and creating a graph of reverse links, which is particularly useful for Google. We can compute the reverse-link graph by mapping `(<source>, <target>)` to `(<target>, <source>)`, and then reducing by emitting `(<target>, list(<source>))`. In the log-processing example, we can process a large log of URL accesses in chunks, with each mapper outputting a set of `(<URL>, 1)` values. Each reducer then receives a list of all these values, grouped by URL. For example, `(google.com, 1), (google.com, 1), ...`, and can “reduce” them by computing the sum, using the value `1` from each pair.

The paper notes that some tasks can be optimized by running what’s called a “combiner” after the map step at each node. This combiner typically does the same thing as a reducer, but operates only on the data produced at the local mapper node. In the above example, we may have a combiner outputting `(google.com, 4), (twitter.com, 7), ...`. Note that this only works for tasks where an intermediate result can be computed using only a fraction of the data. For tasks that need the complete map output before running a `reduce`, we would not use combiners.

The paper also describes possible implementation methods, and notes that a scheduler should keep in mind data transfer costs, and attempt to schedule tasks on nodes that are close to the data they will be processing, and each other. An interesting note made was that the MapReduce implementation used at Google could easily handle machine downtimes and failures on massive scales by simply spinning up new nodes and restarting computation at that node.

Another optimization discussed are “backup tasks”. There may be situations where a small number of slower workers bottleneck the entire system from progressing as the `reduce` step waits for all `map`s to complete. This is often alleviated by scheduling redundant nodes that process the same data, as the amount of work dwindles. If either a primary or a backup finishes computation, the entire system can continue.

The full MapReduce paper can be found [here](https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/).