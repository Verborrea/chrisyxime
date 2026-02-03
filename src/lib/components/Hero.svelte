<script>
	import cel from '$lib/assets/hero-mobile.png';
	import tab from '$lib/assets/hero-tablet.png';
	import des from '$lib/assets/hero-desktop.png';
</script>

<article id="hero" class="responsive-text flex flex-col items-center gap-6 pb-16">
	<picture>
		<source srcset={cel} media="(max-width: 767px)" />
		<source srcset={tab} media="(min-width: 768px) and (max-width: 1023px)" />
		<source srcset={des} media="(min-width: 1024px)" />
		<img src={des} alt="Catedral de arequipa junto con una palméra." class="w-full max-w-300" />
	</picture>
	<blockquote class="max-w-80 px-6 text-center text-pretty italic md:max-w-100 lg:max-w-md">
		"Tres cosas durarán para siempre: la fe, la esperanza y el amor; y la mayor de las tres es el
		<strong>amor</strong>"
	</blockquote>
	<p class="font-light">&mdash; I Corintios 13:13 &mdash;</p>
</article>
