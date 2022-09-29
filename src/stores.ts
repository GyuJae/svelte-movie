import { writable } from "svelte/store";

export const categoryStore = writable<'movie' | 'tv'>('movie')