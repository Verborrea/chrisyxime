import invitadosStatic from '$lib/data/invitados.json';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ platform }) => {
	if (!platform?.env?.boda) {
		return { invitados: [], stats: { total: 0, confirmados: 0, asistentesTotales: 0, pendientes: 0 } };
	}

	// 1. Traer todas las respuestas de la BD
	const { results: respuestas } = await platform.env.boda.prepare(
		"SELECT * FROM respuestas"
	).all();

	// 2. Cruzar datos: Mapeamos el JSON y le pegamos la respuesta si existe
	const listaFinal = invitadosStatic.map((invitado) => {
		const respuesta = respuestas.find((r: any) => r.invitado_id === invitado.id);
		return {
			...invitado,
			respondio: !!respuesta,
			asistira: respuesta?.asistira === 1,
			ceremonia: respuesta?.ceremonia === 1,
			recepcion: respuesta?.recepcion === 1,
			acompañante: respuesta?.acompañante_nombre || '-',
			fecha: respuesta?.fecha_registro ? new Date(respuesta.fecha_registro).toLocaleDateString() : '-'
		};
	});

	// 3. Calcular estadísticas rápidas
	const stats = {
		total: invitadosStatic.length,
		confirmados: respuestas.filter((r: any) => r.asistira === 1).length,
		pendientes: invitadosStatic.length - respuestas.length,
		asistentesTotales: respuestas.filter((r: any) => r.asistira === 1).length +
			respuestas.filter((r: any) => r.acompañante_nombre).length
	};

	return { invitados: listaFinal, stats };
};