<script lang="ts">
	export let id: string;
	export let option: string;
	export let value: number;
</script>

<div class="flex items-center">
	<input {id} class="mr-2" type="radio" name="option" bind:group={value} value={id} />
	<label for={id} class="text-lg"> {option} </label>
</div>
