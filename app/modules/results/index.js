import popupWindow from '../quiz/share';

function showResults(
	questionsLength,
	score,
	results,
	quizContainer,
	resetQuiz
) {
	const filteredItem = results.find(item => (
		item.score <= score ? item : null
	))

	quizContainer.innerHTML =
		`
			<div class="counter">${score} из ${questionsLength} правильных ответов</div>
			<div class="result-title">${filteredItem.title}</div>
			<div class="result-image" style="background-image:url(/assets/images/${filteredItem.image})"></div>
			<div class="share-buttons">
				<div class="share-container">
					<a class="share share--fb" href="//www.facebook.com/sharer/sharer.php?u='${filteredItem.share}">Поделиться</a>
					<a class="share share--vk" href="//vk.com/share.php?url=${filteredItem.share}"></a>
					<a class="share share--tw" href="//twitter.com/share?text=${filteredItem.text}&amp;url=${filteredItem.share}"></a>
				</div>
			</div>
			<button type="button" class="button button--transparent button--again" data-click="toStart">Пройти еще раз</button>
		`

	document.querySelector('[data-click="toStart"]').addEventListener("click", (e) => {
		resetQuiz()
	})

	document.querySelector('.share').addEventListener("click", (e) => {
		e.preventDefault();

		popupWindow(e.target.href, 'share');

	});
}

export default showResults;
