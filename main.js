const game = new Game()
const player = new Player()

const audio = document.getElementById("my_audio");
	
const startBtn = document.getElementById('start-button')
const startCleaningGame = document.querySelector('.start-cleaning')
const tryAgainBtn = document.querySelector('.try-again')
const tryAgainGame = document.querySelector('.try-again')
const startScreen = document.getElementById('start-screen')
const gameScreen = document.getElementById('game-screen')

tryAgainBtn.style.display = 'none'

//make the score button show up only when the game is started
let scoreHidden = document.querySelector('#score');
scoreHidden.style.display = 'none'

//change the look when the game starts
startCleaningGame.addEventListener('click', function() {
	audio.play();
	document.querySelector('.start-cleaning').innerHTML = ' ';
	document.querySelector('#rules').innerHTML = ' '
	scoreHidden.style.display = 'block'
})
	
startBtn.addEventListener('click', () => {
	startScreen.style.display = 'none'
	gameScreen.style.display = 'block'
	tryAgainBtn.style.display = 'none'
})
	
startCleaningGame.addEventListener('click', function() {
	game.gameStarted = true
})
				
tryAgainGame.addEventListener('click', function() {
	window.location.reload()
})

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
	createCanvas(800, 600)
}

function draw() {
	if (game.gameStarted) {
		game.draw()
	}
}

//set the timer/countdown
const time = document.querySelector('h2')
const start = document.querySelector('.start-cleaning')
let timeSecond = 30

startCleaning()

function displayTime(second) {
	const min = Math.floor(second / 60);
	const sec = Math.floor(second % 60);
	time.innerHTML = `${min<10 ? '0' : ''}${min}:${sec<10 ? '0' : ''}${sec}`
}

let count = 0;

//play the game, check for collisions and count the score
function startCleaning() {
	const startCleaning = document.querySelector('.start-cleaning');
	startCleaning.addEventListener('click', function() {
		const countDown = setInterval(() => {
			timeSecond--;
			displayTime(timeSecond);
			if(timeSecond <= 0) {
				if (count >= 150 && game.gameStarted === true) {
					youWon();
					game.gameStarted = false;
				} else if (count < 150 && game.gameStarted === true) {
					youLost()
					game.gameStarted = false;
					audio.pause();
				} 
				clearInterval(countDown)
			}
		}, 1000)
		displayTime(timeSecond)
	})
}

function checkCollision() {
	if (game.gameStarted) {
		count++
		document.querySelector('.score').textContent = `${count}`
	}
}

//winning & losing logic with intervals
const winPhoto = document.getElementById('win-photo');
const wonText = document.querySelector('.won-text')

function youWon() {
	winPhoto.style.display = 'block';
	wonText.style.display = 'block'
	
	setInterval(() => {
		wonText.style.visibility = wonText.style.visibility === 'hidden' ? 'visible' : 'hidden';
	}, 700);
	start.style.display = 'none'
	startScreen.style.display = 'none'
	gameScreen.style.display = 'none'
	document.querySelector('#defaultCanvas0').style.display = 'none'
}

const loserPhoto = document.getElementById('loser-photo');
const loserText = document.querySelector('.loser-text')

function youLost() {
	loserPhoto.style.display = 'block';
	loserText.style.display = 'block';

	setInterval(() => {
		loserText.style.visibility = loserText.style.visibility === 'hidden' ? 'visible' : 'hidden';
	}, 700);

	gameScreen.style.display = 'none'
	document.querySelector('#defaultCanvas0').style.display = 'none'
	tryAgainBtn.style.display = 'block'
}





