<script>
	import rings from '$lib/assets/rings.avif';
	import date from '$lib/assets/date.svg';
</script>

<article id="info" class="flex flex-col items-center gap-12 px-6 text-center sm:gap-16 md:text-lg">
	<p class="text-balance italic">Con la bendición de Dios y nuestros padres:</p>
	<section class="grid items-center justify-items-center gap-4 sm:grid-cols-[1fr_1px_1fr]">
		<div class="space-y-1.5 leading-[1.2]">
			<p class="moises relative">Moisés Sang Fung</p>
			<p>Yocasta Díaz Barros</p>
		</div>
		<div class="h-px w-24 bg-black/50 sm:h-16 sm:w-px"></div>
		<div class="space-y-1.5 leading-[1.2]">
			<p>Luis Arias Allende</p>
			<p>Belén Jáuregui de Arias</p>
		</div>
	</section>
	<img src={rings} alt="Anillos de boda" class="w-full max-w-187.5" />
	<p data-aos="fade-up" class="max-w-120">
		Tenemos el agrado de invitarte a nuestra boda que se celebrará el próximo:
	</p>
	<img data-aos="fade-up" src={date} alt="20 de Junio del 2026" class="w-full max-w-120" />
	<div class="space-y-2">
		<p data-aos="fade-up" class="text-balance italic">
			Acompáñanos al <strong>viaje más importante</strong>
			de nuestras vidas.
		</p>
		<p data-aos="fade-up" class="text-balance italic">
			(Agradeceremos confirmar su asistencia al final de esta página).
		</p>
	</div>
</article>

<style>
	.moises::before {
		content: '†';
		position: absolute;
		left: -8px;
		top: -3px;
	}
</style>
