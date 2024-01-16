<script lang="ts">
	import { LocalStorage } from '$lib/models/LocalStorage';
	import { onMount } from 'svelte';

	interface result {
		score: number;
		isPass: boolean;
	}

	let data: result;
	const fetchResult = async () => {
		try {
			const res = await fetch('/result', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: LocalStorage.getSelectedAnswers()
			});

			data = await res.json();
			console.log(LocalStorage.getSelectedAnswers());
		} catch (e) {
			alert('network error');
			console.error(e);
		}
	};

	onMount(() => {
		fetchResult();
	});

	$: textColor = data?.isPass ? 'text-success' : 'text-error';
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/5SQKsheDxWT
-->

<div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
	{#if !data}
		loading...
	{:else}
		<div class="flex justify-between items-center">
			<h2 class="mb-6 text-2xl font-bold text-gray-700">Test Result</h2>
		</div>
		<div class="space-y-4">
			<div class="flex justify-between items-center">
				<h3 class="text-xl font-bold text-gray-700">Score:</h3>
				<div class="{textColor} font-bold text-xl" class:text-green-500={data.isPass}>
					{data.score}/100
				</div>
			</div>
			<div class="flex justify-between items-center">
				<h3 class="text-xl font-bold text-gray-700">Status:</h3>
				<div class="{textColor} font-bold text-xl">{data.isPass ? 'Passed' : 'Failed'}</div>
			</div>
		</div>
		<div class="mt-6">
			<a href="/" role="button" class="btn btn-accent w-full"> Try Again </a>
		</div>
	{/if}
</div>
