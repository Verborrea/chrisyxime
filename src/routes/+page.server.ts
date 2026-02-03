import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import invitados from '$lib/data/invitados.json';
import { capitalize } from '$lib/utils';

export const actions = {
	default: async ({ request, platform }) => {
		const data = await request.formData();

		const rawName = data.get('name')?.toString() || '';
		const rawAsistente = data.get('asistente_name')?.toString() || null;

		// 2. Capitalizar
		const nameFixed = capitalize(rawName);
		const asistenteFixed = capitalize(rawAsistente);

		const ceremonia = data.get('ceremonia') === 'on';
		const recepcion = data.get('recepcion') === 'on';
		const noAsistire = data.get('noAsistire') === 'on';

		// 1. Validar contra lista inmutable
		const invitadoMatch = invitados.find(
			(i) => i.nombre.toLowerCase() === rawName?.toLowerCase()
		);

		if (!invitadoMatch) {
			return fail(404, { message: 'No figuras en la lista de invitados.' });
		}

		// 2. Verificar base de datos
		if (!platform?.env?.boda) {
			return fail(500, { message: 'Error de conexión con la base de datos.' });
		}

		try {
			// 3. Upsert en D1 (Inserta o actualiza si el invitado ya respondió)
			await platform.env.boda.prepare(`
        INSERT INTO respuestas (invitado_id, nombre_invitado, asistira, ceremonia, recepcion, nombre_acompañante)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(invitado_id) DO UPDATE SET
          asistira = excluded.asistira,
          ceremonia = excluded.ceremonia,
          recepcion = excluded.recepcion,
          nombre_acompañante = excluded.nombre_acompañante,
          fecha_registro = CURRENT_TIMESTAMP
      `)
				.bind(
					invitadoMatch.id,
					nameFixed,
					noAsistire ? 0 : 1,
					ceremonia ? 1 : 0,
					recepcion ? 1 : 0,
					asistenteFixed
				)
				.run();

			return { success: true, message: '¡Confirmación enviada con éxito!' };
		} catch (e) {
			console.error(e);
			return fail(500, { message: 'No pudimos guardar tu respuesta. Reintenta.' });
		}
	}
} satisfies Actions;