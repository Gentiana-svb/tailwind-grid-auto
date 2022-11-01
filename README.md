# tailwind-grid-auto

Plugin for Tailwind CSS that automatically sets the grid width.

[Demo](https://gentiana-svb.github.io/tailwind-grid-auto/)

## Installation

```bash
npm i -D tailwind-grid-auto
```

## Setup

```javascript:tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('tailwind-grid-auto')]
}
```

## Usage

```svelte
<div class="grid grid-auto-4 gap-3">
	{#each list as item}
		<!-- Iterating over lists of values -->
		<div>item[0]</div>
		<div>item[1]</div>
		<div>item[2]</div>
		<div>item[3]</div>
	{/each}
</div>
```
