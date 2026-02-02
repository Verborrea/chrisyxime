<script>
	import Ceremonia from '$lib/components/Ceremonia.svelte';
	import Recepcion from '$lib/components/Recepcion.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Info from '$lib/components/Info.svelte';
	import DressCode from '$lib/components/DressCode.svelte';
	import NoKids from '$lib/components/NoKids.svelte';
	import MesaRegalos from '$lib/components/MesaRegalos.svelte';
	import Confirma from '$lib/components/Confirma.svelte';
</script>

<Hero />
<Info />

<div class="mx-auto size-16 rounded-full bg-green"></div>

<section class="grid gap-8 lg:grid-cols-2">
	<Ceremonia />
	<Recepcion />
</section>

<DressCode />
<NoKids />

<MesaRegalos />
<Confirma />
