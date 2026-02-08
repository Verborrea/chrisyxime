<script lang="ts">
	let { data } = $props();
	const { invitados, stats } = $derived(data);
	const noAsistiran = $derived(stats.total - stats.confirmados - stats.pendientes);
</script>

<div class="min-h-screen bg-gray-50 p-6">
	<header class="mx-auto mt-8 mb-10 flex max-w-6xl flex-col justify-between gap-6 md:flex-row">
		<div>
			<h1 class="text-3xl font-bold text-gray-800">Panel de Invitados</h1>
			<p class="text-gray-500">Chris & Xime — 20.06.2026</p>
		</div>

		<div class="flex flex-col gap-4 sm:flex-row">
			<div class="rounded-lg border-t-4 border-green-500 bg-white p-4 shadow-sm">
				<p class="text-xs font-bold text-gray-400 uppercase">Confirmados</p>
				<p class="text-2xl font-bold">{stats.confirmados}</p>
			</div>
			<div class="rounded-lg border-t-4 border-red-500 bg-white p-4 shadow-sm">
				<p class="text-xs font-bold text-gray-400 uppercase">No Asistiran</p>
				<p class="text-2xl font-bold">{noAsistiran}</p>
			</div>
			<div class="rounded-lg border-t-4 border-blue-500 bg-white p-4 shadow-sm">
				<p class="text-xs font-bold text-gray-400 uppercase">Sillas Totales</p>
				<p class="text-2xl font-bold">{stats.asistentesTotales}</p>
			</div>
			<div class="rounded-lg border-t-4 border-yellow-500 bg-white p-4 shadow-sm">
				<p class="text-xs font-bold text-gray-400 uppercase">Pendientes</p>
				<p class="text-2xl font-bold">{stats.pendientes}</p>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-6xl overflow-hidden rounded-xl bg-white shadow-md">
		<div class="overflow-x-auto">
			<table class="w-full border-collapse text-left">
				<thead>
					<tr class="bg-gray-100 text-xs text-gray-600 uppercase">
						<th class="px-6 py-4">Invitado</th>
						<th class="px-6 py-4">Estado</th>
						<th class="px-6 py-4 text-center">Pase Extra</th>
						<th class="px-6 py-4 text-center">Ceremonia</th>
						<th class="px-6 py-4 text-center">Recepción</th>
						<th class="px-6 py-4">Acompañante</th>
						<th class="px-6 py-4">Fecha</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-100">
					{#each invitados as item}
						<tr class="transition-colors hover:bg-gray-50">
							<td class="px-6 py-4">
								<p class="mb-1 text-sm leading-[1.2] font-medium text-gray-900">{item.nombre}</p>
								<span class="rounded bg-gray-200 px-2 py-0.5 text-[10px] text-gray-600">
									{#if item.extranjero}
										🌍&nbsp;Extranjero
									{:else}
										🏠 Nacional
									{/if}
								</span>
							</td>

							<td class="px-6 py-4">
								{#if !item.respondio}
									<span
										class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-600"
										>Pendiente</span
									>
								{:else if item.asistira}
									<span class="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600"
										>Asistirá</span
									>
								{:else}
									<span class="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600"
										>No&nbsp;Asistirá</span
									>
								{/if}
							</td>
							<td class="px-6 py-4 text-center">
								{#if item.plusOne}
									<span
										class="rounded bg-purple-100 px-2 py-1 text-[10px] font-bold text-purple-600 uppercase"
									>
										Dual (1 + 1)
									</span>
								{:else}
									<span
										class="rounded bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-400 uppercase"
									>
										Individual
									</span>
								{/if}
							</td>
							<td class="px-6 py-4 text-center">{item.ceremonia ? '✅' : '❌'}</td>
							<td class="px-6 py-4 text-center">{item.recepcion ? '✅' : '❌'}</td>
							<td class="px-6 py-4 text-sm text-gray-500 italic">{item.acompañante}</td>
							<td class="px-6 py-4 text-xs text-gray-400">{item.fecha}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</main>
</div>
