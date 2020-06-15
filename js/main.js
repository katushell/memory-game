document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
	{
		name: 'firstcat',
		img: 'img/cat1.png'
	},
	{
		name: 'firstcat',
		img: 'img/cat1.png'
	},
	{
		name: 'secondcat',
		img: 'img/cat2.png'
	},
	{
		name: 'secondcat',
		img: 'img/cat2.png'
	},
	{
		name: 'thirdcat',
		img: 'img/cat3.png'
	},
	{
		name: 'thirdcat',
		img: 'img/cat3.png'
	},
	{
		name: 'fourthcat',
		img: 'img/cat4.png'
	},
	{
		name: 'fourthcat',
		img: 'img/cat4.png'
	},
	{
		name: 'fifthhcat',
		img: 'img/cat5.png'
	},
	{
		name: 'fifthhcat',
		img: 'img/cat5.png'
	},
	{
		name: 'sixthcat',
		img: 'img/cat6.png'
	},
	{
		name: 'sixthcat',
		img: 'img/cat6.png'
	},
	]


//creating the gameboard
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const message = document.querySelector('#message')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []
function createboard() {
	for(let i = 0; i < cardArray.length; i++){
		let card = document.createElement('img')
		card.setAttribute('src', 'img/malevic.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}

//check for matches
function checkForMatch() {
	let cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if(optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute('src', 'img/malevic.png')
		cards[optionTwoId].setAttribute('src', 'img/malevic.png')
		// alert('You have clicked the same image')
		message.textContent = 'You have clicked the same image'
		
	} else if (cardsChosen[0] === cardsChosen[1]){
		// alert('Its match, do u like tinder?')
		cards[optionOneId].setAttribute('src', 'img/good.png')
		cards[optionTwoId].setAttribute('src', 'img/good.png')
		cards[optionOneId].removeEventListener('click', flipCard)
		cards[optionTwoId].removeEventListener('click', flipCard)
	    message.textContent = 'Its match, do u like tinder?'
		cardsWon.push(cardsChosen)
	} else {
		cards[optionOneId].setAttribute('src', 'img/malevic.png')
		cards[optionTwoId].setAttribute('src', 'img/malevic.png')
		function showMessage() {
			message.textContent = 'Did did you finish school? '
		}
		showMessage()
	}
	cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
	  resultDisplay.textContent = 'Congratulations! You found them all!'
	  message.textContent = 'Good job)00)0))0)'
    }

} 
//flip your card
function flipCard(){
	let cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500)
	  }
}

createboard()


});












