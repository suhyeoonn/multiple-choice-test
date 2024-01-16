import { questions } from '$lib/questions/test1.js';
import { json } from '@sveltejs/kit';

const MIN_PASS_SCORE = 1;

export async function POST({ request }) {
	const data = await request.json();

	const score = questions.reduce((total, question, i) => {
		return question.answerIndex == data[i + 1] ? total + 1 : total;
	}, 0);

	return json({ score, isPass: score >= MIN_PASS_SCORE });
}
