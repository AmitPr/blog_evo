import type { Metadata } from "./metadata";

export interface Post {
	metadata: Metadata;
    default: any;
}

export interface PostObject {
    url: string;
    metadata: Metadata;
}