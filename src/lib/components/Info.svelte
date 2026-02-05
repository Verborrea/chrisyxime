<script>
	import rings from '$lib/assets/rings.avif';
	import date from '$lib/assets/date.svg';
	import Papas from './Papas.svelte';
</script>

<article id="info" class="flex flex-col items-center gap-12 text-center sm:gap-16 md:text-lg">
	<p class="mx-6 text-balance italic">Con la bendición de Dios y nuestros padres:</p>
	<Papas />
	<div class="px-6">
		<img src={rings} alt="Anillos de boda" class="w-full max-w-150" />
	</div>
	<p data-aos="fade-up" class="mx-6 max-w-120">
		Tenemos el agrado de invitarte a nuestra boda que se celebrará el próximo:
	</p>
	<div class="px-6">
		<img data-aos="fade-up" src={date} alt="20 de Junio del 2026" class="w-full max-w-120" />
	</div>
	<div class="mx-6 space-y-2">
		<p data-aos="fade-up" class="text-balance italic">
			Acompáñanos al <strong>viaje más importante</strong>
			de nuestras vidas.
		</p>
		<p data-aos="fade-up" class="text-balance italic">
			(Agradeceremos confirmar su asistencia al final de esta página).
		</p>
	</div>
</article>
