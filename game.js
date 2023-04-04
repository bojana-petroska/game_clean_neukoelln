class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.item = new Item()
        this.backgroundImages
        this.playerImage
        this.garbage
        this.plasticBag
        this.mouse
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('./Header-JH-Station-Neukoelln.jpg'), x: 0}
        ]
        this.playerImage = loadImage('./betty_boop.png')
        this.garbage = loadImage('./smiley_poop.png')
        this.plasticBag = loadImage('./plastic_bag.png')
        this.mouse = loadImage('./mouse.png')
    }

    draw() {
        //clear()
        this.background.draw()
        this.player.draw()
        this.item.draw()
    }

}