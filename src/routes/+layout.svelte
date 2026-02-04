<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';
	import 'aos/dist/aos.css';

	let { children } = $props();

	onMount(() => {
		AOS.init();
	});
</script>

<Toaster />
{@render children?.()}
