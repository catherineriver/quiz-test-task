import showQuestions from '@modules/questions';
import showResults from '@modules/results';
import data from './data.json'

const quizContainer = document.querySelector('.section-container');
const sectionModifier = document.querySelector('.section--intro');

let score = 0;
let currentQuestion = 0;
const questionsLength = data.questions.length

console.log(`Questions count: ${questionsLength}`);

const increaseScore = () => {
	score = score + 1;

	console.log(`Current question: ${score}`)
};

const increaseQuestion = () => {
	currentQuestion = currentQuestion + 1;

	if (currentQuestion < questionsLength) {
		console.log(`Current question: ${currentQuestion}`)
		showQuestions(data.questions[currentQuestion], quizContainer, increaseScore, increaseQuestion, questionsLength, currentQuestion);
	} else {
		console.log(`Result ${score}`)
		sectionModifier.classList.remove("section--progress");
		sectionModifier.classList.add("section--result");
		showResults(questionsLength, score, data.results, quizContainer, resetQuiz);
	}
};

const resetQuiz = () => {
	score = 0;
	currentQuestion = 0;

	console.log(`Result ${score}`)
	console.log(`Current question: ${currentQuestion}`)

	showQuestions(data.questions[currentQuestion], quizContainer, increaseScore, increaseQuestion, questionsLength, currentQuestion);

}

document.querySelector('.button--action').addEventListener("click", (e) => {
	sectionModifier.classList.remove("section--intro");
	sectionModifier.classList.add("section--progress");
	showQuestions(
		data.questions[currentQuestion],
		quizContainer,
		increaseScore,
		increaseQuestion,
		questionsLength,
		currentQuestion
	);
})
