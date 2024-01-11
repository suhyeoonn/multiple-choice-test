export class LocalStorage {
	static save(id: number, selectedIndex: number) {
		const answersJson = localStorage.getItem('selectedAnswers');
		const answers = answersJson ? JSON.parse(answersJson) : {};
		answers[id] = selectedIndex;
		localStorage.setItem('selectedAnswers', JSON.stringify(answers));
	}
}
