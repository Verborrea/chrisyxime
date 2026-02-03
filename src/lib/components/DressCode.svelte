<script>
	import dresscode from '$lib/assets/dresscode.svg';
	import zapatos from '$lib/assets/zapatos.avif';
	import PurpleBox from './ui/PurpleBox.svelte';
</script>

<PurpleBox>
	<div class="flex w-full flex-col items-center gap-6">
		<img src={dresscode} alt="Dress Code" class="w-full max-w-md" />
		<p class="text-2xl tracking-widest">E L E G A N T E</p>
	</div>
	<div class="grid grid-cols-[1fr_1px_1fr] items-center gap-8">
		<div class="flex flex-col items-center">
			<p class="mb-2 font-bold">Damas:</p>
			<p class="max-w-40">Vestido largo de color entero<br />(No estampados)</p>
		</div>
		<div class="h-20 w-px bg-black"></div>
		<div class="flex flex-col items-center">
			<p class="mb-2 font-bold">Varones:</p>
			<p>Traje / Terno</p>
		</div>
	</div>
	<p class="max-w-110 italic md:text-lg">
		El color blanco queda reservado para la novia.<br /><strong>Evita utilizar blanco</strong>,
		beige, gris claro o cualquier color similar al blanco.
	</p>
	<img src={zapatos} alt="Zapatos" class="w-full max-w-sm" />
</PurpleBox>
