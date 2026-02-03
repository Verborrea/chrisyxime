<script>
	import escudo from '$lib/assets/escudo.avif';
	import firma from '$lib/extranjero/firma_morada.avif';

	import mobile_footer from '$lib/extranjero/mobile_footer.avif';
	import footer from '$lib/extranjero/wa.avif';

	import como from '$lib/extranjero/como2.avif';
	import hospedaje from '$lib/extranjero/hospedaje.avif';
	import clima from '$lib/extranjero/clima.avif';
</script>

<header class="relative z-10">
	<div class="h-20 bg-purple-light lg:h-28"></div>
	<img
		src={escudo}
		alt="Escudo de los novios"
		class="absolute top-3.5 left-1/2 max-w-24 -translate-x-1/2 rounded-[100%] bg-purple-light p-4 md:top-5 md:max-w-32 md:p-5"
	/>
	<div
		class="flex flex-col items-center gap-10 bg-purple px-6 py-30 pb-20 tracking-[0.2em] sm:tracking-[0.4em]"
	>
		<img src={firma} alt="Firma de los novios" class="mx-auto w-full max-w-70" />
		<div class="flex flex-col items-center text-purple-dark">
			<p class="text-sm sm:text-lg">RECOMENDACIONES PARA</p>
			<p class="text-sm font-bold sm:text-lg">TU VIAJE</p>
		</div>
	</div>
</header>
<div class="deco-top"></div>
<main class="px-6 py-24 text-center md:text-lg">
	<div class="mw grid max-w-300 gap-12 md:grid-cols-2 md:gap-24">
		<article class="relative border border-black px-6">
			<div class="mx-auto flex h-full max-w-80 flex-col justify-center gap-8 py-18">
				<img src={como} alt="Como llegar" />
				<p>
					Llegada al Aeropuerto Internacional Jorge Chávez (Lima), desde allí toma un vuelo directo
					de 1 hora y 30 minutos hasta Arequipa.
				</p>
				<div class="flex flex-col">
					<p class="font-bold">Aerolínea recomendada:</p>
					<p>LATAM Airlines.</p>
				</div>
			</div>
			<div class="absolute top-full left-1/2 size-16 -translate-1/2 rounded-full bg-blue"></div>
		</article>
		<article class="relative border border-black px-6">
			<div class="mx-auto flex h-full max-w-80 flex-col justify-center gap-8 py-18">
				<h2 class="font-serif text-4xl md:text-5xl">TRANSPORTE</h2>
				<p>
					El trayecto desde el aeropuerto hasta el centro de la ciudad toma 20 minutos, ya sea en
					taxi o usando apps como Uber o Indrive.
				</p>
			</div>
			<div class="absolute top-full left-1/2 size-16 -translate-1/2 rounded-full bg-purple"></div>
		</article>
		<article class="relative border border-black px-6">
			<div class="mx-auto flex h-full max-w-100 flex-col justify-center gap-8 py-18">
				<img src={hospedaje} alt="Como llegar" />
				<ul>
					<li>&bull; Casa Andina</li>
					<li>&bull; Sonesta Hotel</li>
					<li>&bull; Katari Hotel</li>
					<li>&bull; Wyndham Costa del Sol</li>
					<li>&bull; Hampton by Hilton</li>
				</ul>
				<div class="flex flex-col">
					<p class="font-bold">Otras opciones:</p>
					<ul>
						<li>&bull; Hoteles Boutique</li>
						<li>&bull; Airbnb: en los distritos de Cayma o Yanahuara</li>
					</ul>
				</div>
			</div>
			<div class="absolute top-full left-1/2 size-16 -translate-1/2 rounded-full bg-violet"></div>
		</article>
		<article class="relative border border-black px-6">
			<div class="mx-auto flex h-full max-w-100 flex-col justify-center gap-8 py-18">
				<img src={clima} alt="Clima" />
				<p>
					Arequipa está a más de 2,300 msnm. Hidrátate muy bien y tómate los primeros días con
					calma, para permitir que tu cuerpo se acostumbre a la altitud.
				</p>
				<p>El clima de Arequipa es seco y soleado. La temperatura puede variar durante el día.</p>
				<div class="grid grid-cols-[1fr_1px_1fr] items-center gap-5">
					<div class="flex flex-col">
						<p class="font-bold">De día:</p>
						<p>Sol fuerte. Usar bloqueador, gafas y sombrero.</p>
					</div>
					<div class="h-24 w-px bg-black"></div>
					<div class="flex flex-col">
						<p class="font-bold">De noche:</p>
						<p>Puede refrescar bastante. Traer abrigo.</p>
					</div>
				</div>
			</div>
			<div class="absolute top-full left-1/2 size-16 -translate-1/2 rounded-full bg-green"></div>
		</article>
		<article class="relative border border-black px-6">
			<div class="mx-auto flex h-full max-w-115 flex-col justify-center gap-8 py-18">
				<h2 class="font-serif text-4xl md:text-5xl">GASTRONOMÍA</h2>
				<p>
					La gastronomía es la joya de Arequipa. No puedes irte sin visitar las picanterías
					tradicionales y probar sus platos emblemáticos.
				</p>
				<div class="flex flex-col">
					<p class="font-bold">Picanterías recomendadas:</p>
					<p>La Nueva Palomino, Sol de Mayo y La Benita.</p>
				</div>
				<div class="flex flex-col">
					<p class="font-bold">Platos imprescindibles:</p>
					<ul>
						<li>&bull; Rocoto Relleno (Un clásico picante)</li>
						<li>&bull; Chupe de Camarones (Sopa sustanciosa).</li>
						<li>&bull; Adobo Arequipeño (Típico de los domingos).</li>
						<li>&bull; Y para postre, el famoso Queso Helado.</li>
					</ul>
				</div>
			</div>
			<div class="absolute top-full left-1/2 size-16 -translate-1/2 rounded-full bg-red"></div>
		</article>
		<article class="relative border border-black px-6">
			<div class="mx-auto flex h-full max-w-100 flex-col justify-center gap-8 py-18">
				<h2 class="font-serif text-4xl md:text-5xl">TURISMO</h2>
				<div class="flex flex-col">
					<p class="font-bold">Lugares imprescindibles:</p>
					<ul>
						<li>&bull; Plaza de Armas y Catedral.</li>
						<li>&bull; Monasterio de Santa Catalina.</li>
						<li>&bull; Barrio de San Lázaro.</li>
						<li>&bull; Claustros de La Compañía.</li>
						<li>&bull; Mirador de Yanahuara.</li>
						<li>&bull; Ruta del sillar.</li>
					</ul>
				</div>
				<div class="flex flex-col">
					<p class="font-bold">Para los más aventureros:</p>
					<p>
						Excursión al Cañón del Colca (uno de los más profundos del mundo). Se encuentra a 4
						horas de la ciudad.
					</p>
				</div>
			</div>
			<div
				class="absolute top-full left-1/2 size-16 -translate-1/2 rounded-full bg-purple-light"
			></div>
		</article>
	</div>
	<a href="/" class="mt-24 flex items-center justify-center gap-2 hover:underline">
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
		>
		Regresar a Inicio
	</a>
</main>
<picture>
	<source srcset={mobile_footer} media="(max-width: 768px)" />
	<source srcset={footer} media="(min-width: 769px)" />
	<img src={footer} alt="Catedral de Arequipa" class="w-full" />
</picture>

<style>
	.deco-top {
		background-image: url("data:image/svg+xml;utf8,<svg width='64' height='20' viewBox='0 0 64 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M32 20C16 20 16 0 0 0H64C48 0 48 20 32 20Z' fill='%23A7A9C6'/></svg>");
		background-repeat: repeat-x;
		background-size: auto 100%;
		height: 20px;
		width: 100vw;
	}
</style>
