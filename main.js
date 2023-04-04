const game = new Game()
const player = new Player()

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
const start = document.querySelector('h1')
let timeSecond = 5

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
	})
}

