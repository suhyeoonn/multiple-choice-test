<script lang="ts">
	import { LocalStorage } from '$lib/models/LocalStorage';

	const fetchResult = async () => {
		// await fetch('/result', {
		//     method: 'POST',
		//     headers: {'Content-Type:application/json'},
		//     body: LocalStorage.getSelectedAnswers()
		// })

		console.log(LocalStorage.getSelectedAnswers());
		setTimeout(() => new Promise((resolve) => resolve(true)), 2000);
	};
	let promise = fetchResult();
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/5SQKsheDxWT
-->

<div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
	{#await promise}
		Loading...
	{:then data}
		<div class="flex justify-center items-center">
			<h2 class="mb-6 text-2xl font-bold text-gray-700">Result</h2>
		</div>
		<div class="space-y-4">
			<div class="flex flex-col items-center">
				<p class="mt-4 text-center text-gray-600">
					Test your knowledge on various topics and see how well you do!
				</p>
			</div>
		</div>
	{/await}
</div>
