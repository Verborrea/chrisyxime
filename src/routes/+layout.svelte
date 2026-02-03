<script lang="ts">
	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	import PaperBackground from '$lib/components/PaperBackground.svelte';

	import escudo from '$lib/assets/escudo.avif';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		AOS.init();
	});
</script>

<img src={escudo} alt="Escudo de bodas" class="absolute top-4 left-1/2 w-18 -translate-x-1/2" />
<PaperBackground>
	{@render children?.()}
</PaperBackground>
<Footer />
