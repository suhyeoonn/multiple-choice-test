<script lang="ts">
	import OptionItem from '$lib/components/OptionItem.svelte';

	export let data;
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/IOT2XHiah2I
-->
<div class="w-full h-screen max-w-md mx-auto flex flex-col justify-center">
	<div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
		<div class="flex justify-between items-center">
			<h2 class="mb-6 text-2xl font-bold text-gray-700">
				{data.questions[0].question}
			</h2>
			<div class="text-red-500 font-bold text-xl">10:00</div>
		</div>
		<form class="space-y-4">
			{#each data.questions[0].options as option, i}
				<OptionItem id={i.toString()} {option} />
			{/each}
			<div class="mt-6">
				<button
					class="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</div>
