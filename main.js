const game = new Game()
const player = new Player()

const audio = document.getElementById("my_audio");


// window.onload = function() {
	//     document.getElementById("my_audio").play();
	// }
	
const startBtn = document.getElementById('start-button')
const startCleaningGame = document.querySelector('.start-cleaning')
const startScreen = document.getElementById('start-screen')
const gameScreen = document.getElementById('game-screen')
	
startCleaningGame.addEventListener('click', function() {
		audio.play()
	})

startBtn.addEventListener('click', () => {
	startScreen.style.display = 'none'
	gameScreen.style.display = 'block'
})

startCleaningGame.addEventListener('click', function() {
	game.gameStarted = true
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

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight);
//   }

//TIMER
const time = document.querySelector('h2')
const start = document.querySelector('.start-cleaning')
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

let count = 0;

function startCleaning() {
	const startCleaning = document.querySelector('.start-cleaning');
	startCleaning.addEventListener('click', function() {
		const countDown = setInterval(() => {
			timeSecond--;
			displayTime(timeSecond);
			if(timeSecond <= 0) {
				if (count >= 2 && game.gameStarted === true) {
					youWon();
					game.gameStarted = false;
				} else if (count < 2 && game.gameStarted === true) {
					youLost()
					game.gameStarted = false;
				} 
				//endTime()
				clearInterval(countDown)
				//game.gameStarted = false;
			}
		}, 1000)
		displayTime(timeSecond)
		//game.gameStarted = true
	})
}


function checkCollision() {
	if (game.gameStarted) {
		count++
		document.querySelector('.score').textContent = `${count}`
	}
}

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
}




