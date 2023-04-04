const game = new Game()
const player = new Player()

const startBtn = document.getElementById('start-button')
const startScreen = document.getElementById('start-screen')
const gameScreen = document.getElementById('game-screen')

startBtn.addEventListener('click', function() {
	startScreen.style.display = 'none'
	gameScreen.style.display = 'block'
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
	background('#FF8C00')
	game.draw()
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }

//TIMER
const time = document.querySelector('h2')
const start = document.querySelector('button')
let timeSecond = 30

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
	const startCleaning = document.querySelector('button');
	startCleaning.addEventListener('click', function() {
		const countDown = setInterval(() => {
			timeSecond--;
			displayTime(timeSecond);
			if(timeSecond <= 0 || timeSecond < 1) {
				endTime()
				clearInterval(countDown)
			}
		}, 1000)
		displayTime(timeSecond)
		game.gameStarted = true
	})
}

