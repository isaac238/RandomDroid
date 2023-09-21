<script lang="ts">
	import type { Droid } from "./interfaces";
	import 'iconify-icon';
	import { selectedDroid } from "./stores";

	export let droid: Droid;

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			selectedDroid.set(undefined);
		}
	});
</script>

<style>
#overlay {
	min-height: 100vh;
	min-width: 100vw;
	z-index: 200;
	background: gray;
	position: fixed;
	top: 0px;
	opacity: 75%;
}

#overlay_content {
	position: fixed;
	display: flex;
	top: 0;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	z-index: 200;
}

#droid_overlay_root {
	background: #222;
	color: white;
	padding: 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(0px 0px 10px black);
}

.col {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.row {
	display: flex;
	gap: 1rem;
}

#droid_image {
	width: 15rem;
	height: 20rem;
	object-fit: contain;
	border-radius: 1rem;
}

h2, ul, li, p {
	margin: 0;
	padding: 0;
}

ul {
list-style-position: inside;
column-count: 2;
column-gap: 1rem;
}

.wrap {
	flex-wrap: wrap;
}

#close_button {
	font-size: 2rem;
	background: none;
	border: none;
	color: white;
	position: absolute;
	top: 1rem;
	right: 1rem;
	cursor: pointer;
}

#close_button:hover {
	color: red;
}
</style>

<div id="overlay"></div>
<div id="overlay_content">
<div id="droid_overlay_root" class="col">
<button id="close_button" on:click={() => selectedDroid.set(undefined)}><iconify-icon icon="mdi:close"></iconify-icon></button>
<h2>{droid.name}</h2>
<div class="row">
<img id="droid_image" src={droid.image} alt={droid.name}/>
<div class="col">
<p>Manufacturer: {droid.manufacturer}</p>
<p>Model: {droid.model}</p>
{#if typeof(droid.class) === typeof([])}
<section>
<p>Droid Class</p>
<ul>
{#each droid.class as droid_class}
<li>{droid_class}</li>
{/each}
</ul>
</section>
{:else}
<p>Droid Class: {droid.class}</p>
{/if}
<section>
<h2>Affiliated Groups</h2>
<ul>
{#each droid.affiliation as affiliate}
	<li>{affiliate}</li>
{/each}
</ul>
</section>
</div>
</div>

<div class="row wrap">
<section>
<h2>Wiki Categories</h2>
<ul>
{#each droid.categories as category}
	<li>{category}</li>
{/each}
</ul>
</section>

</div>
</div>
</div>
