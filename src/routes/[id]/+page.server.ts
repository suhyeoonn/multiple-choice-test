import { questions } from '$lib/questions/test1';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	const id = Number(params.id);
	return {
		...questions[id - 1],
		isLast: id === questions.length
	};
}

export const actions = {
	default: async ({ params }) => {
		const nextId = Number(params.id) + 1;
		const url = questions[nextId - 1] ? `/${nextId}` : '/result';
		redirect(300, url);
	}
};
