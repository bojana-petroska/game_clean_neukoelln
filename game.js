class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.playerImage
        this.garbage
        this.plasticBag
        this.mouse
        this.sun
        this.backgroundImages
        this.items = []
        this.gameStarted = false
        this.gameEnded = true
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('./Header-JH-Station-Neukoelln.jpg'), x: 0}
        ]
        this.playerImage = loadImage('./betty_boop.png')
        this.garbage = loadImage('./smiley_poop.png')
        this.plasticBag = loadImage('./plastic_bag.png')
        this.mouse = loadImage('./mouse.png')
        this.sun = loadImage('./sun.png')
    }


    draw() {
        //clear()
        this.background.draw()
        this.player.draw()

if (this.gameStarted) {
    if (frameCount % 30 === 0) {
        this.items.push(new Item(this.garbage))
    }
    if (frameCount % 40 === 0) {
        this.items.push(new Item(this.plasticBag))
    }
    if (frameCount % 50 === 0) {
        this.items.push(new Item(this.mouse))
    }
    if (frameCount % 150 === 0) {
        this.items.push(new Item(this.sun))
    }
    
    this.items.forEach(item => {
        item.draw()
    })
}         
    }
}