<script>
	import dresscode from '$lib/assets/dresscode.svg';
	import zapatos from '$lib/assets/zapatos.avif';
	import PurpleBox from './ui/PurpleBox.svelte';
</script>

<PurpleBox>
	<div class="flex w-full flex-col items-center gap-6">
		<img src={dresscode} alt="Dress Code" class="w-full max-w-100" />
		<p class="text-2xl tracking-widest">E L E G A N T E</p>
	</div>
	<div class="grid grid-cols-[1fr_1px_1fr] items-center gap-6 text-sm md:gap-8 md:text-base">
		<div class="flex flex-col items-center">
			<p class="mb-2 font-bold">Damas:</p>
			<p class="max-w-40">Vestido largo y Color entero (No estampados)</p>
		</div>
		<div class="h-20 w-px bg-purple-dark/50"></div>
		<div class="flex flex-col items-center">
			<p class="mb-2 font-bold">Varones:</p>
			<p>Traje/Terno</p>
		</div>
	</div>
	<div class="max-w-110 space-y-2 italic md:text-lg">
		<p class="font-bold">El color blanco queda reservado para la novia.</p>
		<p>Evita utilizar cualquier color similar al blanco (beige, gris claro, etc.)</p>
	</div>
	<img src={zapatos} alt="Zapatos" class="w-full max-w-sm" />
</PurpleBox>
