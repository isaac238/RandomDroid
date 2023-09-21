import { writable } from "svelte/store";
import type { Droid } from "./interfaces";

export const selectedDroid = writable<Droid | undefined>();
