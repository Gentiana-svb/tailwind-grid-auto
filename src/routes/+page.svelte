<script lang="ts">
	import Button from './Button.svelte'
	import '../app.css'

	$: Class = 'grid-auto-4'

	let randArray: number[] = []
	const gen = () =>
		(randArray = [...Array(16).keys()].map(() => Math.random() * 100 + 30))
	gen()
</script>

<Button on:click={gen} Class="bg-indigo-800">Shuffle</Button>
<Button on:click={() => (Class = 'grid-auto-1')}>set 1</Button>
<Button on:click={() => (Class = 'grid-auto-2')}>set 2</Button>
<Button on:click={() => (Class = 'grid-auto-4')}>set 4</Button>
<Button on:click={() => (Class = 'grid-auto-8')}>set 8</Button>

class: {Class}

<div class="grid gap-3 m-4 items-center {Class}">
	{#each randArray as size, i}
		<div
			style:width="{size}px"
			style:height="{size}px"
			class="flex items-center justify-center bg-teal-700 text-white"
		>
			{i}
		</div>
	{/each}
</div>
