<script>
	import confirma_title from '$lib/assets/confirma.svg';
	import letters from '$lib/assets/letters.avif';
	import Checkbox from './Checkbox.svelte';

	let ceremonia = $state(false);
	let recepcion = $state(false);
	let noAsistire = $state(false);

	// Cuando marcas "No asistiré"
	function handleNoAsistire() {
		if (noAsistire) {
			ceremonia = false;
			recepcion = false;
		}
	}

	// Cuando marcas cualquiera de las opciones de arriba
	function handleAsistencia() {
		if (ceremonia || recepcion) {
			noAsistire = false;
		}
	}
</script>

<div class="px-6">
	<article
		class="mx-auto flex max-w-2xl flex-col items-center gap-16 rounded-t-full bg-green px-6 py-32 text-center"
	>
		<img src={confirma_title} alt="Confirma tu asistencia" class="max-w-sm" />
		<div class="grid grid-cols-[1fr_1px_1fr] items-center gap-8">
			<div>
				<p>Hasta el</p>
				<p class="font-bold">20 de marzo del 2026</p>
				<p class="mt-4 text-sm italic">Invitados que viven en el extranjero</p>
			</div>
			<div class="h-20 w-px bg-black"></div>
			<div>
				<p>Hasta el</p>
				<p class="font-bold">20 de abril del 2026</p>
				<p class="mt-4 text-sm italic">Invitados que viven en Perú</p>
			</div>
		</div>
		<p>Nombres y apellidos:</p>
		<form action="" class="w-full max-w-md space-y-4 text-start">
			<input type="text" class="input" placeholder="Escribe aquí..." />

			<Checkbox
				bind:checked={ceremonia}
				onchange={handleAsistencia}
				label="Sí asistiré a la ceremonia religiosa."
			/>

			<Checkbox
				bind:checked={recepcion}
				onchange={handleAsistencia}
				label="Sí asistiré a la recepción."
			/>

			<Checkbox bind:checked={noAsistire} onchange={handleNoAsistire} label="No podré asistir." />
		</form>
		<p class="max-w-md italic md:text-lg">
			(Si son más de una persona llena el formulario por cada persona asistente, gracias)
		</p>
		<img src={letters} alt="Cartas de amor" class="w-full max-w-75" />
	</article>
</div>
