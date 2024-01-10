import { questions } from '$lib/questions/test1';

export function load({ params }) {
	return {
		...questions[Number(params.num) - 1]
	};
}
