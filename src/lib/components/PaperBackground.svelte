<script lang="ts">
	let { children } = $props();
</script>

<div class="shadow-wrapper">
	<div class="paper-container">
		<svg class="paper-filter" aria-hidden="true">
			<filter id="paperTexture">
				<feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
				<feDiffuseLighting in="noise" lighting-color="#fdfcf0" surfaceScale="4">
					<feDistantLight azimuth="45" elevation="60" />
				</feDiffuseLighting>
			</filter>
		</svg>

		<main class="content relative z-1 space-y-16">
			{@render children?.()}
		</main>
	</div>
</div>

<style>
	/* 2. Este componente proyecta la sombra siguiendo la silueta del hijo (incluyendo el recorte) */
	.shadow-wrapper {
		position: relative;
		top: 65px;
		filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
		width: 100%;
	}

	.paper-container {
		position: relative;
		min-height: 50vh;
		background-color: var(--color-paper, #fdfcf0);

		/* 3. La máscara solo se encarga de recortar el papel */
		-webkit-mask-image: radial-gradient(52px 66px at 50% 0%, transparent 98%, black 100%);
		mask-image: radial-gradient(52px 66px at 50% 0%, transparent 98%, black 100%);

		/* Aseguramos que el contenido no quede pegado al recorte */
		padding-top: 65px;
	}

	/* 4. La textura se mantiene fija para ese efecto de "papel infinito" */
	.paper-container::before {
		content: '';
		position: fixed; /* Se queda quieto al hacer scroll */
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: url(#paperTexture);
		opacity: 0.4;
		pointer-events: none;
		z-index: 0;
	}

	.paper-filter {
		position: absolute;
		width: 0;
		height: 0;
		pointer-events: none;
	}
</style>
