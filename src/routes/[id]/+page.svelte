<script lang="ts">
	import OptionItem from '$lib/components/OptionItem.svelte';
	import { LocalStorage } from '$lib/models/LocalStorage.js';

	export let data;

	let selectedIndex: number;

	const onSubmit = (e: Event) => {
		e.preventDefault();
		LocalStorage.save(data.id, selectedIndex);
	};
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/IOT2XHiah2I
-->
<div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
	<div class="flex justify-between items-center">
		<h2 class="mb-6 text-2xl font-bold text-gray-700">
			{data.question}
		</h2>
		<div class="text-red-500 font-bold text-xl">10:00</div>
	</div>
	<form class="space-y-4" on:submit={onSubmit}>
		{#each data.options as option, i}
			<OptionItem id={i.toString()} {option} bind:value={selectedIndex} />
		{/each}
		<div class="mt-6">
			<button class="btn btn-accent w-full" disabled={!selectedIndex}>Submit</button>
		</div>
	</form>
</div>
