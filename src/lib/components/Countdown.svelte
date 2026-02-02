<script>
	import { onMount } from 'svelte';

	let months = $state(0);
	let weeks = $state(0);
	let days = $state(0);

	const targetDate = new Date('2026-06-20T00:00:00');

	function updateCountdown() {
		const now = new Date();
		const diff = targetDate.getTime() - now.getTime();

		if (diff <= 0) {
			months = weeks = days = 0;
			return;
		}

		const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

		months = Math.floor(totalDays / 30.2); // promedio
		const remainingDays = totalDays % 30.2;
		weeks = Math.floor(remainingDays / 7);
		days = Math.floor(remainingDays % 7);
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 12);
		return () => clearInterval(interval);
	});
</script>

<article class="grid grid-cols-5 items-center justify-center justify-items-center">
	<section class="flex flex-col items-center pt-2">
		<p class="font-serif text-6xl">{months}</p>
		<p class="leading-none">meses</p>
	</section>
	<div class="h-24 w-px bg-black"></div>
	<section class="flex flex-col items-center pt-2">
		<p class="font-serif text-6xl">{weeks}</p>
		<p class="leading-none">semanas</p>
	</section>
	<div class="h-24 w-px bg-black"></div>
	<section class="flex flex-col items-center pt-2">
		<p class="font-serif text-6xl">{days}</p>
		<p class="leading-none">días</p>
	</section>
</article>
