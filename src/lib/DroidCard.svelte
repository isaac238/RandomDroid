<script lang="ts">
	import type { Droid } from "./interfaces";
	import { selectedDroid } from "./stores";

	export let droid: Droid;
</script>

<style>
.col {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}


#droid_card_root {
	background: #333;
	padding: 1rem;
	border-radius: .5rem;
	width: 15rem;
	min-width: 10rem;
	max-width: 20rem;
	color: white;
	text-wrap: wrap;
	cursor: pointer;
}

#droid_card_root:hover {
	filter: brightness(0.3);
}

#droid_image {
	width: 15rem;
	height: 20rem;
	object-fit: contain;
	border-radius: 1rem;
}

#droid_name {
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>

<button on:click={() => selectedDroid.set(droid)}>
<div id="droid_card_root" class="col">
<h2 id="droid_name">{droid.name}</h2>
<img id="droid_image" src={droid.image} alt={droid.name}/>
</div>
</button>
