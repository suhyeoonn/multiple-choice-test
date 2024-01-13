import type { question } from '$lib/types';
import { writable } from 'svelte/store';

export const questionsStore = writable<question[]>([]);
