import type { Metadata } from "./metadata";

export interface Post {
	metadata: Metadata;
    content: string;
    component: any;
}
