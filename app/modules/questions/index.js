function showQuestions(
	questions,
	quizContainer,
	increaseScore,
	increaseQuestion,
	questionsLength,
	currentQuestion) {

	var answers = [];
	var descriptions = [];

	var currentQuestion = currentQuestion + 1;

	questions.answers.map(answer => {
		descriptions.push(
			`
				<div>${answer.desc}</div>
			`
		)
		answers.push(
			`
				<label data-click="answer">
					<input type="radio" name="answer" value="${answer.title}" data-id="${answer.id}">
					${answer.title}
				</label>
			`
		);
	})


	const output =
		`
			<div class="counter">${currentQuestion}/${questionsLength}</div>
			<div class="question">${questions.question}</div>
			<div class="answers-list">${answers.join('')}</div>
		`;

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output;

	const answer = document.querySelectorAll('[data-click="answer"]');

	for (let i = 0; i < answer.length; i++) {
		answer[i].addEventListener('change', (e) => {
			const question = questions.question;
			const correctAnswer = questions.correctAnswer;
			const userInput = document.querySelector('input[name="answer"]:checked').value;
			const description = descriptions[e.target.dataset.id];
			const answerIsCorrect = correctAnswer === parseInt(e.target.dataset.id);

			if (answerIsCorrect) {
				increaseScore()
			}

			showNext(
				question,
				userInput,
				quizContainer,
				increaseQuestion,
				answerIsCorrect,
				description,
				questionsLength,
				currentQuestion
			);
		});
	}
}

const showNext = (
	question,
	userInput,
	quizContainer,
	increaseQuestion,
	answerIsCorrect,
	description,
	questionsLength,
	currentQuestion
) => {
	var output = [];

	if (answerIsCorrect) {
		output.push(
			`
				<div class="counter">${currentQuestion}/${questionsLength}</div>
				<div class="question">${question}</div>
				<div class="answers-list">
					<div class="user-answer correct">${userInput}</div>
				</div>
				<div class="answer-desc">${description}</div>
				<button type="button" class="button button--transparent button--next" data-click="next">Продолжить</button>
			`
		);
	} else output.push(
		`
			<div class="counter">${currentQuestion}/${questionsLength}</div>
			<div class="question">${question}</div>
			<div class="answers-list">
				<div class="user-answer incorrect">${userInput}</div>
			</div>
			<div class="answer-desc">${description}</div>
			<button type="button" class="button button--transparent button--next" data-click="next">Продолжить</button>
		`
	);


	quizContainer.innerHTML = output.join('');

	document.querySelector('[data-click="next"]').addEventListener("click", () => {
		increaseQuestion()
	})
};

export default showQuestions;
