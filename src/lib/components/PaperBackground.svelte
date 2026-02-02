<script lang="ts">
	let { children } = $props();
</script>

<div class="paper-container">
	{@render children?.()}

	<svg class="paper-filter" aria-hidden="true">
		<filter id="paperTexture">
			<feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />

			<feDiffuseLighting in="noise" lighting-color="#fdfcf0" surfaceScale="4">
				<feDistantLight azimuth="45" elevation="60" />
			</feDiffuseLighting>
		</filter>
	</svg>
</div>

<style>
	.paper-container {
		position: relative;
		min-height: 100vh;
		background-color: #fdfcf0; /* Color base del papel */
	}

	.paper-container::before {
		content: '';
		position: fixed; /* Mantiene el fondo quieto mientras haces scroll */
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: url(#paperTexture);
		opacity: 0.35; /* Ajusta esto para que sea más o menos marcado */
		pointer-events: none;
		z-index: 0;
	}

	/* Ocultamos el SVG técnico */
	.paper-filter {
		position: absolute;
		width: 0;
		height: 0;
	}

	.paper-container::after {
		content: '';
		position: fixed;
		inset: 0;
		background: radial-gradient(circle, transparent 60%, rgba(0, 0, 0, 0.03) 100%);
		pointer-events: none;
	}
</style>
