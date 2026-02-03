<script>
	import confirma_title from '$lib/assets/confirma.svg';
	import letters from '$lib/assets/letters.avif';
	import Checkbox from './ui/Checkbox.svelte';

	let name = $state('');
	let asistente_name = $state('');
	let asistente = $state(false);
	let ceremonia = $state(false);
	let recepcion = $state(false);
	let noAsistire = $state(false);

	function handleNoAsistire() {
		if (noAsistire) {
			ceremonia = false;
			recepcion = false;
			asistente = false;
		}
	}

	function handleAsistencia() {
		if (ceremonia || recepcion) {
			noAsistire = false;
		}
	}
</script>

<div class="px-6">
	<article
		class="mx-auto flex max-w-150 flex-col items-center gap-16 rounded-t-full bg-green px-6 py-32 text-center"
	>
		<img src={confirma_title} alt="Confirma tu asistencia" class="mb-2 max-w-sm" />
		<div class="grid grid-cols-[1fr_1px_1fr] items-center gap-8">
			<div class="flex flex-col items-center">
				<p class="mb-4 max-w-40 text-sm italic">Invitados que viven en el extranjero</p>
				<p>Hasta el</p>
				<p class="font-bold">20 de marzo del 2026</p>
			</div>
			<div class="h-20 w-px bg-black"></div>
			<div class="flex flex-col items-center">
				<p class="mb-4 max-w-40 text-sm italic">Invitados que viven en el Perú</p>
				<p>Hasta el</p>
				<p class="font-bold">20 de abril del 2026</p>
			</div>
		</div>
		<form action="" class="flex w-full max-w-104 flex-col gap-4 text-start">
			<input
				type="text"
				class="input"
				id="name"
				name="name"
				placeholder="Nombres y Apellidos"
				autocomplete="name"
				bind:value={name}
			/>
			{#if asistente}
				<input
					type="text"
					class="input"
					placeholder="Nombre del Asistente"
					bind:value={asistente_name}
				/>
			{/if}
			<Checkbox bind:checked={asistente} label="Llevaré a un asistente." />
			<Checkbox
				bind:checked={ceremonia}
				onchange={handleAsistencia}
				label="Sí {asistente ? 'asistiremos' : 'asistiré'} a la ceremonia religiosa."
			/>
			<Checkbox
				bind:checked={recepcion}
				onchange={handleAsistencia}
				label="Sí {asistente ? 'asistiremos' : 'asistiré'} a la recepción."
			/>
			<Checkbox bind:checked={noAsistire} onchange={handleNoAsistire} label="No podré asistir." />
			<button type="submit" class="btn btn-green self-center">
				<span>Enviar</span>
			</button>
		</form>
		<img src={letters} alt="Cartas de amor" class="w-full max-w-80" />
	</article>
</div>
