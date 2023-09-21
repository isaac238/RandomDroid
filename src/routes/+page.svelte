<script lang="ts">
	import 'iconify-icon';
	import DroidCard from '$lib/DroidCard.svelte';
	import type { Droid } from '$lib/interfaces.js';
	import Overlay from '$lib/Overlay.svelte';
	import { selectedDroid } from '$lib/stores.js';

	export let data;
	const droids = data.droids;
	let search: string = '';
	let filtered: Droid[];
	$: {
			if (search === '') {
				filtered = droids;
			};
			filtered = droids.filter(droid => droid.name.toLowerCase().includes(search.toLowerCase()));
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

h1 {
	color: white;
	font-size: 2.5rem;
}

.interaction {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .5rem;
	width: 100%;
	height: 10rem;
}

.interaction > input {
	width: 50%;
	border-radius: 1rem;
	height: 3rem;
	padding: 1rem;
	font-size: 1rem;
	box-sizing: border-box;
}

.interaction > button {
	height: 3rem;
	border-radius: 1rem;
	width: 3rem;
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.interaction > button:hover {
	filter: brightness(0.4);
}

.interaction > input:focus {
	outline: none;
}

#droids {
	display: flex;
	flex-direction: column;
	width: fit-content;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

@media only screen and (min-width: 1025px) {
	#droids {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
}
</style>
<h1> Star Wars Droid DB </h1>
<div class="interaction">
<input type="text" bind:value={search} placeholder="Search for a droid..."/>
<button on:click={() => selectedDroid.set(droids[Math.floor(Math.random()*droids.length)])}>
<iconify-icon icon="ion:dice"></iconify-icon>
</button>
</div>

<div id="droids">
{#if $selectedDroid}
<Overlay droid={$selectedDroid}/>
{/if}
{#each filtered as droid}
	<DroidCard {droid}/>
{/each}
</div>
