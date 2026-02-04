<script>
	import PaperBackground from '$lib/components/PaperBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import escudo from '$lib/assets/escudo.avif';
	import Ceremonia from '$lib/components/Ceremonia.svelte';
	import Recepcion from '$lib/components/Recepcion.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Info from '$lib/components/Info.svelte';
	import DressCode from '$lib/components/DressCode.svelte';
	import NoKids from '$lib/components/NoKids.svelte';
	import MesaRegalos from '$lib/components/MesaRegalos.svelte';
	import Confirma from '$lib/components/Confirma.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
</script>

<img src={escudo} alt="Escudo de bodas" class="absolute top-4 left-1/2 w-18 -translate-x-1/2" />
<PaperBackground>
	<Hero />
	<Info />

	<div class="mx-auto size-16 rounded-full bg-green"></div>

	<section class="mw grid gap-12 px-6 lg:grid-cols-2">
		<Ceremonia />
		<Recepcion />
	</section>

	<article class="mx-auto flex max-w-2xl flex-col gap-12 px-6 text-center md:gap-18 md:text-lg">
		<section>
			<p>Pronto diremos</p>
			<p class="font-bold">Sí, acepto.</p>
		</section>
		<Countdown />
		<p>Algunas consideraciones para este día tan especial:</p>
	</article>

	<div class="px-6"><DressCode /></div>
	<div class="px-6"><NoKids /></div>

	<MesaRegalos />
	<Confirma />
</PaperBackground>
<Footer />
