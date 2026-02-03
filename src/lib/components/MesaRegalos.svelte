<script>
	import bun from '$lib/assets/bun.avif';
	import BlackBox from './ui/BlackBox.svelte';
	import PurpleBox from './ui/PurpleBox.svelte';
	import mesaRegalos from '$lib/assets/mesa-regalos.svg';
</script>

<div class="px-6">
	<img src={bun} alt="Moño de Regalo" class="mx-auto w-90.5" />
</div>

<div class="mx-auto max-w-3xl px-6">
	<BlackBox>
		<div class="flex flex-col items-center gap-10 px-6 py-12">
			<img src={mesaRegalos} alt="Mesa de Regalos" class="mt-6 w-90.5 md:mt-10" />
			<div class="space-y-1.5">
				<p class="font-bold text-balance">Tu presencia es nuestro mayor regalo.</p>
				<p>
					Sin embargo, si deseas hacernos un obsequio, te compartimos el link de nuestra mesa de
					regalos virtual
				</p>
			</div>
			<a
				href="https://sinenvolturas.com/christianximena/regalos"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-purple"><span>Ver Mesa de regalos virtual</span></a
			>
			<p>
				Si prefieres un detalle práctico, puedes hacerlo a través de las siguientes cuentas
				bancarias:
			</p>
			<PurpleBox>
				<section class="space-y-2">
					<h3 class="font-bold">N° Cuenta Perú</h3>
					<p>Cuenta Soles en Interbank: 8983164676708</p>
					<p>CCI Soles Interbank: 00389801316467670840</p>
				</section>
				<section class="space-y-2">
					<h3 class="font-bold">N° Cuenta República Dominicana</h3>
					<p>Cuenta Corriente Banco Popular: 787283555</p>
				</section>
				<section class="space-y-2">
					<h3 class="font-bold">N° Cuenta España</h3>
					<p>ES70 0049 5103 7728 1674 0378</p>
				</section>
			</PurpleBox>
			<div class="italic">
				<p class="font-bold">A considerar:</p>
				<p>Por temas de viaje y logística, no podremos recibir regalos en físico.</p>
			</div>
			<p>Agradecemos de corazón tu comprensión y cariño.</p>
		</div>
	</BlackBox>
</div>
