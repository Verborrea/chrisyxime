<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import { Toaster } from 'svelte-french-toast';

	import '../app.css';
	import 'aos/dist/aos.css';

	import PaperBackground from '$lib/components/PaperBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import escudo from '$lib/assets/escudo.avif';

	let { children } = $props();

	onMount(() => {
		AOS.init();
	});
</script>

<Toaster />
<img src={escudo} alt="Escudo de bodas" class="absolute top-4 left-1/2 w-18 -translate-x-1/2" />
<PaperBackground>
	{@render children?.()}
</PaperBackground>
<Footer />
