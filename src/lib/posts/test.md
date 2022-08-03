---
topic: Theory
url: async-and-multithreaded
date: 1659491812
---
# Asynchronous and Multithreaded: What's the difference?
While talking to some of friends recently, I noticed that they used the terms "Asynchronous" and "Multithreaded" interchangably. Since the difference can appear to be subtle at first, I thought it best to lay out the differences alongside an analogy that I hope helps. To properly explain the difference between the two, it's important to first understand the basics of both the concepts, as well as how they differ from "simple" single-threaded programs. Let's get some _italic_ and some __bold__ text in here too.

```rust contract.rs
use entropy_beacon_cosmos::{BeaconQueryMsg, BeaconConfigQuery, BeaconConfigResponse};

let beacon_addr = STATE.load(deps.storage)?.beacon_addr;
let beacon_config = deps.querier
    .query::<BeaconConfigResponse>(&cosmwasm_std::QueryRequest::Wasm(
        WasmQuery::Smart {
            contract_addr: beacon_addr.to_string(),
            msg: to_binary(&BeaconQueryMsg::BeaconConfig(BeaconConfigQuery {}))?,
        },
    ))?;

let beacon_fee = beacon_config.protocol_fee;
```

## Single-threaded processing

Single-threaded processing is what you, or any other developer, has probably interacted with and written the most. These programs are simple. Given a set of tasks, they run them one at a time, waiting for each task to complete before moving on to the next. This means that if there's a task that takes a long time to complete, the rest of the tasks will be delayed until that long-running task is done.

To put it another way, a common analogy used to explain these concepts has us think of the kitchen. If you have a set of steps that you need to take to prepare a meal, you can't do them out of order, or all at once. You have to do them one-by-one, making sure that each step is done before moving on to the next:

1. Get the bread
2. Take one slice of bread
3. Put the bread in the toaster
4. Take the bread out of the toaster
5. Butter the bread

In more technical terms, your program runs one operation at a time, no matter how long each operation takes to complete.

## Asynchronous processing

Asynchronous processing is a bit more complex. It's similar to single-threaded processing, but instead of waiting for each task to complete before moving on to the next, you can start moving on to different tasks at the same time. Stepping back into our kitchen example:

1. Get the bread
2. Take one slice of bread
3. Put the bread in the toaster
4. _While waiting for the bread to toast_, Scramble some eggs
5. When the toaster is done, take out the bread and butter it
6. Take the eggs out of your pan, _if they haven't already finished_ cooking by this point.

And now that everything is cooked, you can finally start to eat your meal. Again, in more technical terms, your program can start working on other operations while waiting for another operation that takes a long time to complete. Note that this is only true if the operation you're waiting for is not an operation that requires the processor to be busy. For example, if you're waiting for a file to be loaded from the disc, or to fetch data over the network, you aren't doing any work other than waiting for the operation to complete, so asynchronous processing can be performed.

## Multithreading

Multithreading is different from asynchronous processing in that it's not running a single operation at any one time, but is instead running multiple operations in parallel. One last time in our kitchen example, let's look at the same set of steps, but with a multithreaded approach:

- Get the bread, and slice it
- While you are slicing the bread, your friend is busy slicing some fruits
- Put the bread in the toaster
- While you are toasting the bread, your friend is busy cooking some eggs
- When the bread is done, butter it
- While you are buttering the bread, your friend is busy putting the eggs in the plate

As you can see, there are operations that are being performed in parallel because you are no longer the only cook in the kitchen. In technical terms, this is equivalent to another thread on the processor running another set of operations at the same time as the main thread.

## Async vs. Multithreading

One of the most important differences between the two is data access. Since only one operation is running at _any_ time in a single-threaded asynchronous program, there's no possibility of data being accessed by two operations at the same time. This means that you need not worry about locking or synchronization between different operations. On the other hand, multithreaded programs need to be very careful not to modify data without being in complete sync with the other threads, as you may end up with race conditions and bad data. One last fact to keep in mind is that multithreaded programs can run operations asynchronously _within_ each thread.

And that wraps up an explanation talking about the difference between synchronous, asynchronous, and multithreaded programs. If you're interested in seeing more, I recommend that you seek out a good set of examples in the language documentation of your choice (Although, async/await is a more modern language feature).