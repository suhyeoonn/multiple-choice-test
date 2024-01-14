import { questions } from '$lib/questions/test1';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	return {
		...questions[Number(params.id) - 1]
	};
}

export const actions = {
	default: async ({ params }) => {
		const nextId = Number(params.id) + 1;
		const url = questions[nextId - 1] ? `/${nextId}` : '/result';
		redirect(300, url);
	}
};
