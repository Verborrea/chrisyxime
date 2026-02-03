<script>
	import recepcion from '$lib/assets/recepcion.svg';
	import molino from '$lib/assets/molino.avif';
</script>

<article class="relative flex flex-col items-center gap-12 border border-black text-center">
	<div class="px-10 pt-10 md:pt-24">
		<img src={recepcion} alt="Recepción" class="w-full max-w-sm" />
	</div>
	<section class="flex flex-col items-center gap-8 px-6">
		<div data-aos="fade-up">
			<h3 class="mb-2 font-bold tracking-widest text-black/50">HORA</h3>
			<p>2 : 0 0&nbsp;&nbsp;&nbsp;P M</p>
			<div class="h-6"></div>
		</div>
		<div data-aos="fade-up">
			<h3 class="mb-2 font-bold tracking-widest text-black/50">LUGAR</h3>
			<p>Molino Blanco</p>
			<p>Callejón Ripacha 137-177, San Lázaro</p>
			<p>Arequipa, Perú.</p>
		</div>
		<a
			href="https://maps.app.goo.gl/pX9gHeVSJmKt8uyv6"
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-red"
		>
			<span><span class="font-normal">Ver en</span> Google Maps</span>
		</a>
	</section>
	<div class="flex grow justify-end">
		<img src={molino} alt="Molino de Sabandía" class="w-full" />
	</div>
</article>
