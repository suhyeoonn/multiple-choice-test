export class LocalStorage {
	static save(id: number, selectedIndex: number) {
		const answersJson = LocalStorage.getSelectedAnswers();
		const answers = answersJson ? JSON.parse(answersJson) : {};
		answers[id] = selectedIndex;
		localStorage.setItem('selectedAnswers', JSON.stringify(answers));
	}
	static getSelectedAnswers() {
		return localStorage.getItem('selectedAnswers') ?? '';
	}
}
