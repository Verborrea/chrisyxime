// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				boda: D1Database
			}
			cf: CfProperties
			ctx: ExecutionContext
			context: ExecutionContext;
			caches: CacheStorage & { default: Cache };
		}
	}
}

export { };
