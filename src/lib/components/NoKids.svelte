<script>
	import nokids from '$lib/assets/nokids.svg';
	import PurpleBox from './ui/PurpleBox.svelte';
</script>

<PurpleBox>
	<img src={nokids} alt="Zapatos" class="w-full max-w-80" />
	<p class="max-w-90 italic md:text-lg">
		Amamos a los niños, pero esta celebración es <strong>únicamente de adultos</strong>.<br />
		Gracias por tu comprensión.
	</p>
</PurpleBox>
