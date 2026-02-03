<script>
	import rings from '$lib/assets/rings.avif';
	import date from '$lib/assets/date.svg';
</script>

<article id="info" class="responsive-text flex flex-col items-center gap-16 px-6 text-center">
	<p>Con la bendición de Dios y nuestros padres:</p>
	<section class="flex items-center gap-4 sm:gap-8 md:gap-16">
		<div class="space-y-1.5 leading-[1.2]">
			<p>Moisés Sang Fung</p>
			<p>Yocasta Díaz Barros</p>
		</div>
		<div class="h-16 w-px bg-black"></div>
		<div class="space-y-1.5 leading-[1.2]">
			<p>Luis Arias Allende</p>
			<p>Belén Jáuregui de Arias</p>
		</div>
	</section>
	<img src={rings} alt="Anillos de boda" class="w-full max-w-187.5" />
	<p class="max-w-120">
		Tenemos el agrado de invitarte a nuestra boda que se celebrará el próximo:
	</p>
	<img src={date} alt="20 de Junio del 2026" class="w-full max-w-120" />
	<div>
		<p class="italic">
			Acompáñanos al <strong>viaje más importante</strong>
			de nuestras vidas.
		</p>
		<p class="italic">(Agradeceremos confirmar su asistencia al final de esta página).</p>
	</div>
</article>
