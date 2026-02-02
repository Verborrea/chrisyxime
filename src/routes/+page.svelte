<script>
	import Header from '$lib/components/Header.svelte';

	import cel from '$lib/assets/hero-mobile.png';
	import tab from '$lib/assets/hero-tablet.png';
	import des from '$lib/assets/hero-desktop.png';
</script>

<main class="relative z-10">
	<Header />
	<article id="hero" class="flex flex-col items-center gap-6 py-16 md:py-16">
		<picture>
			<source srcset={cel} media="(max-width: 767px)" />
			<source srcset={tab} media="(min-width: 768px) and (max-width: 1023px)" />
			<source srcset={des} media="(min-width: 1024px)" />
			<img src={des} alt="Catedral de arequipa junto con una palméra." class="w-full max-w-300" />
		</picture>
		<blockquote class="max-w-md px-6 text-center text-sm text-pretty italic md:text-base">
			"Tres cosas durarán para siempre: la fe, la esperanza y el amor; y la mayor de las tres es el
			<strong>amor</strong>"
		</blockquote>
		<p class="text-xs md:text-sm">- I Corintios 13:13 -</p>
	</article>
</main>
