<script>
	import ceremonia from '$lib/assets/ceremonia.svg';
	import iglesia from '$lib/assets/iglesia.avif';
</script>

<article class="relative flex flex-col items-center gap-12 border border-black text-center">
	<div class="px-10 pt-10 md:pt-12">
		<img src={ceremonia} alt="Ceremonia Religiosa" class="w-full max-w-sm" />
	</div>
	<section class="flex flex-col items-center gap-8 px-6">
		<div data-aos="fade-up">
			<h3 class="mb-2 font-bold tracking-widest text-black/50">HORA</h3>
			<p>1 1 : 3 0&nbsp;&nbsp;&nbsp;A M</p>
			<p>(Asegúrate de estar 15 minutos antes)</p>
		</div>
		<div data-aos="fade-up">
			<h3 class="mb-2 font-bold tracking-widest text-black/50">LUGAR</h3>
			<p>Parroquia San Miguel Arcángel</p>
			<p>(Iglesia de Cayma)</p>
			<p>Arequipa, Perú.</p>
		</div>
		<a
			href="https://maps.app.goo.gl/4uxEnMJwNeNKFock8"
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-purple"
			data-aos="fade-up"
		>
			<span><span class="font-normal">Ver en</span> Google Maps</span>
		</a>
	</section>
	<img src={iglesia} alt="Iglesia de Cayma" class="w-full" />
</article>
