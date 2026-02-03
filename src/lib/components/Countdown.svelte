<script>
	import { onMount } from 'svelte';

	let months = $state(0);
	let weeks = $state(0);
	let days = $state(0);

	// Valores formateados: siempre 2 dígitos
	const displayMonths = $derived(months.toString().padStart(2, '0'));
	const displayWeeks = $derived(weeks.toString().padStart(2, '0'));
	const displayDays = $derived(days.toString().padStart(2, '0'));

	const targetDate = new Date('2026-06-20T00:00:00');

	function updateCountdown() {
		const now = new Date();
		const diff = targetDate.getTime() - now.getTime();

		if (diff <= 0) {
			months = weeks = days = 0;
			return;
		}

		const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

		// Lógica matemática
		months = Math.floor(totalDays / 30.44); // 30.44 es el promedio real de días por mes
		const remainingDaysAfterMonths = totalDays % 30.44;
		weeks = Math.floor(remainingDaysAfterMonths / 7);
		days = Math.floor(remainingDaysAfterMonths % 7);
	}

	onMount(() => {
		updateCountdown();
		// Actualizamos cada 12 horas como tenías,
		// pero si usas días, quizás quieras actualizar cada 1 hora
		const interval = setInterval(updateCountdown, 1000 * 60 * 60);
		return () => clearInterval(interval);
	});
</script>

<article class="grid grid-cols-5 items-center justify-center justify-items-center">
	<section class="flex flex-col items-center pt-2">
		<p class="font-serif text-6xl tracking-wider">{displayMonths}</p>
		<p class="leading-none italic">meses</p>
	</section>

	<div class="h-16 w-px bg-black/20"></div>

	<section class="flex flex-col items-center pt-2">
		<p class="font-serif text-6xl tracking-wider">{displayWeeks}</p>
		<p class="leading-none italic">semanas</p>
	</section>

	<div class="h-16 w-px bg-black/20"></div>

	<section class="flex flex-col items-center pt-2">
		<p class="font-serif text-6xl tracking-wider">{displayDays}</p>
		<p class="leading-none italic">días</p>
	</section>
</article>
