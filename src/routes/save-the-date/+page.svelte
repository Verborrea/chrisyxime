<script>
	import header from '$lib/assets/escudo.avif';

	import cel from '$lib/hero/cel.avif';
	import tab from '$lib/hero/tab.avif';
	import comp from '$lib/hero/comp.avif';

	import firma from '$lib/extranjero/firma.avif';
	import musicos from '$lib/extranjero/musicos.avif';
	import escudo from '$lib/extranjero/escudo.avif';
	import flor from '$lib/extranjero/flor.avif';
	import Countdown from '$lib/components/Countdown.svelte';
</script>

<article id="hero" class="overflow-hidden pt-32 pb-18 sm:pt-48 md:pt-24 lg:-mt-18 lg:pt-0">
	<picture>
		<source srcset={cel} media="(max-width: 767px)" />
		<source srcset={tab} media="(min-width: 768px) and (max-width: 1023px)" />
		<source srcset={comp} media="(min-width: 1024px)" />
		<img
			src={comp}
			alt="Catedral de arequipa junto con una palméra."
			class="mx-auto w-full max-w-350 -translate-x-4 scale-150 sm:scale-125 md:translate-x-0 md:scale-100"
		/>
	</picture>
</article>
<main class="px-6 pb-12 sm:text-lg">
	<div class="flex flex-col items-center gap-16 text-center sm:gap-20">
		<div class="flex flex-col items-center gap-2 tracking-[0.2em] sm:tracking-[0.4em]">
			<img src={firma} alt="Firma de los novios" class="mx-auto w-[50vw] max-w-70 pb-2" />
			<p class="text-sm sm:text-lg">SÁBADO, 20 DE JUNIO, 2026</p>
			<p class="text-sm sm:text-lg">AREQUIPA, PERÚ</p>
		</div>
		<img src={musicos} alt="Músicos" class="mx-auto w-full max-w-130" />
		<div class="flex flex-col items-center">
			<p>Nuestro</p>
			<p class="pt-3 font-serif text-6xl">DÍA ESPECIAL</p>
			<p>se acerca...</p>
		</div>
		<Countdown />
		<div class="flex flex-col items-center gap-4">
			<p class="max-w-130">
				Guarda la fecha y acompáñanos <wbr /><strong class="font-bold"
					>al&nbsp;viaje&nbsp;más&nbsp;importante de nuestras vidas</strong
				>.
			</p>
			<div class="h-[1px] w-16 bg-black"></div>
			<p>¡La invitación oficial llegará pronto!</p>
		</div>
		<a
			href="/extranjero"
			class="btn btn-purple max-w-100 flex-col gap-[3px] px-6 pt-5.5 pb-5 text-center sm:px-8 sm:py-6 sm:pt-6"
		>
			<p class="leading-[1.2] font-bold sm:text-xl">¿Nos visitas desde otro país?</p>
			<p class="text-sm leading-[1.3] sm:text-base md:text-lg">
				Ten algunas recomendaciones para tu viaje. <strong class="font-bold">Haz click aquí.</strong
				>
			</p>
		</a>
		<div class="flex flex-col gap-8">
			<img src={escudo} alt="Escudo de los novios" class="w-32" />
			<p>2 0 . 0 6 . 2 0 2 6</p>
		</div>
		<img src={flor} alt="Flor decorativa" class="mx-auto w-full max-w-250" />
	</div>
</main>
