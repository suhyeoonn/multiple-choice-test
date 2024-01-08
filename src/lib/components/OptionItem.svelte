<script lang="ts">
	export let id: string;
	export let option: string;
</script>

<div class="flex items-center">
	<input {id} class="mr-2" type="radio" name="scientist" />
	<label for={id} class="text-lg"> {option} </label>
</div>
