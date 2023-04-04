const game = new Game()
const player = new Player()

const startBtn = document.getElementById('start-button')
const startScreen = document.getElementById('start-screen')
const gameScreen = document.getElementById('game-screen')

let buttonStartsGameScreen = false

startBtn.addEventListener('click', () => {
	startScreen.style.display = 'none'
	gameScreen.style.display = 'block'
	buttonStartsGameScreen = true
})

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	if (buttonStartsGameScreen) {
		game.draw()
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }

//TIMER
const time = document.querySelector('h2')
const start = document.querySelector('.start-cleaning')
let timeSecond = 15

startCleaning()

function displayTime(second) {
	const min = Math.floor(second / 60);
	const sec = Math.floor(second % 60);
	time.innerHTML = `${min<10 ? '0' : ''}${min}:${sec<10 ? '0' : ''}${sec}`
}

function endTime() {
	time.innerHTML = 'Time Out'
	start.innerHTML = 'Oops you didn\'t clean Neukölln' 
}

function startCleaning() {
	const startCleaning = document.querySelector('.start-cleaning button');
	startCleaning.addEventListener('click', function() {
		const countDown = setInterval(() => {
			timeSecond--;
			displayTime(timeSecond);
			if(timeSecond <= 0 || timeSecond < 1) {
				endTime()
				clearInterval(countDown)
				game.gameStarted = false;
			}
		}, 1000)
		displayTime(timeSecond)
		game.gameStarted = true
	})
}

let count = 0;

function checkCollision() {
	count++
	document.querySelector('.score').textContent = `${count}`
	if (count >= 10) {
		youWon();
		game.gameStarted = false;
	}
}
const winPhoto = document.getElementById('win-photo');
const wonText = document.querySelector('.won-text')

function youWon() {
	//winPhoto.classList.add('win-photo');
	winPhoto.style.display = 'block';
	wonText.style.display = 'block'

	setInterval(() => {
		wonText.style.visibility = wonText.style.visibility === 'hidden' ? 'visible' : 'hidden';
	  }, 500);
	  start.style.display = 'none'
	}




