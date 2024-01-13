import { questions } from '$lib/questions/test1';

export function load() {
	return {
		questions: questions.map(({ id, question, options }) => ({ id, question, options }))
	};
}
