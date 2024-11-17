<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte</title>
</svelte:head>

{@render children()}
