<script lang="ts">
	export let Class = 'bg-sky-500'
</script>

<button on:click class="px-3 py-2 text-white rounded-md {Class}">
	<slot />
</button>
