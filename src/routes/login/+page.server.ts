import { superValidate } from "sveltekit-superforms";
import type { PageServerLoad } from "./$types";
import { loginSchema } from "$lib/zod-schemas";

import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};
