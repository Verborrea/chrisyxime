<script lang="ts">
	import '../app.css';
	import PaperBackground from '$lib/components/PaperBackground.svelte';

	let { children } = $props();
</script>

<PaperBackground>
	{@render children?.()}
</PaperBackground>
