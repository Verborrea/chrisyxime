<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';
	import invitados from '$lib/data/invitados.json';
	import toast from 'svelte-french-toast';
	import confirma_title from '$lib/assets/confirma.svg';
	import letters from '$lib/assets/letters.avif';
	import Checkbox from './ui/Checkbox.svelte';

	let loading = $state(false);

	let name = $state('');
	let asistente_name = $state('');
	let asistente = $state(false);
	let ceremonia = $state(false);
	let recepcion = $state(false);
	let noAsistire = $state(false);

	// Lógica para detectar si el invitado tiene pase extra desde el JSON inmutable
	const invitadoData = $derived(
		invitados.find((i) => i.nombre.toLowerCase() === name.trim().toLowerCase())
	);
	const puedeLlevarExtra = $derived(invitadoData?.plusOne ?? false);

	function handleNoAsistire() {
		if (noAsistire) {
			ceremonia = false;
			recepcion = false;
			asistente = false;
			asistente_name = '';
		}
	}

	function handleAsistencia() {
		if (ceremonia || recepcion) {
			noAsistire = false;
		}
	}
</script>

<div class="px-6" data-aos="fade-up">
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
		<form
			method="POST"
			use:enhance={() => {
				loading = true;
				return ({ result }) => {
					loading = false;
					if (result.type === 'success' && result.data) {
						toast.success((result.data.message as string) || '¡Confirmación enviada!');
					} else if (result.type === 'failure' && result.data) {
						toast.error((result.data.message as string) || 'Ocurrió un error.');
					} else if (result.type === 'error') {
						toast.error('Error inesperado del servidor.');
					}
				};
			}}
			class="flex w-full max-w-104 flex-col gap-4 text-start"
		>
			<input
				type="text"
				class="input"
				name="name"
				placeholder="Nombres y Apellidos"
				autocomplete="name"
				bind:value={name}
				required
			/>

			{#if puedeLlevarExtra}
				<div transition:slide class="flex flex-col gap-4">
					<Checkbox bind:checked={asistente} label="Llevaré a un asistente." />
					{#if asistente}
						<input
							type="text"
							name="asistente_name"
							class="input"
							placeholder="Nombre del Asistente"
							bind:value={asistente_name}
							required
							transition:fade
						/>
					{/if}
				</div>
			{/if}

			<Checkbox
				name="ceremonia"
				bind:checked={ceremonia}
				onchange={handleAsistencia}
				label="Sí {asistente ? 'asistiremos' : 'asistiré'} a la ceremonia religiosa."
			/>
			<Checkbox
				name="recepcion"
				bind:checked={recepcion}
				onchange={handleAsistencia}
				label="Sí {asistente ? 'asistiremos' : 'asistiré'} a la recepción."
			/>
			<Checkbox
				name="noAsistire"
				bind:checked={noAsistire}
				onchange={handleNoAsistire}
				label="No podré asistir."
			/>

			<button type="submit" class="btn btn-green mt-4 self-center" disabled={loading}>
				{#if loading}
					<span>Cargando</span>
				{:else}
					<span>Enviar</span>
				{/if}
			</button>
		</form>

		<img src={letters} alt="Cartas de amor" class="w-full max-w-80" />
	</article>
</div>
