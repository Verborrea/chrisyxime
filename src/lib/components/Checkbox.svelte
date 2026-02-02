<script>
	let {
		checked = $bindable(false),
		label = 'Acepto los términos',
		id = 'checkbox-' + Math.random().toString(36).substring(2, 9),
		...props
	} = $props();
</script>

<div class="checkbox-container">
	<input type="checkbox" {id} name={id} bind:checked class="sr-only" {...props} />
	<label for={id} class="checkbox-wrapper shrink-0 items-center">
		<div class="custom-box {checked ? 'checked' : ''}">
			{#if checked}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			{/if}
		</div>
		<p class="text-pretty">{label}</p>
	</label>
</div>

<style>
	:root {
		--light-blue: #e1f5fe;
	}

	.checkbox-container {
		display: flex;
		align-items: center;
	}

	/* Ocultar el input original pero mantener accesibilidad */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	.checkbox-wrapper {
		display: flex;
		cursor: pointer;
		user-select: none;
		width: 100%; /* Asegura que ocupe el ancho disponible */
	}

	.custom-box {
		width: 24px;
		height: 24px;
		flex-shrink: 0; /* ¡VITAL! Evita que el checkbox se aplaste cuando el texto es largo */
		border-radius: 6px;
		margin-right: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		background-color: white;
	}

	p {
		margin: 0;
		overflow-wrap: break-word; /* Rompe palabras largas si es necesario */
		word-break: break-word;
		white-space: normal; /* Asegura que el texto fluya naturalmente */
		flex: 1; /* Permite que el texto tome el espacio restante y haga wrap */
		line-height: 1.2;
	}

	.custom-box.checked {
		background-color: #ffb600;
	}

	.custom-box svg {
		width: 14px;
		height: 14px;
		color: white;
	}

	.checkbox-wrapper:hover .custom-box,
	input:focus + .checkbox-wrapper .custom-box {
		box-shadow: 0 0 0 4px #ffb7009d;
	}
</style>
