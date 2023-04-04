class Item {
    constructor(image) {
        this.image = image;
        this.x = random(1000);
        this.y = random(500);
        this.width = 70;
        this.height = 70;
        this.items = []
        this.count = 0
    }

    draw() {

        //const randomIndex = Math.floor(Math.random() * items.length)

        //const randomItem = items[randomIndex]


        image(this.image, this.x, this.y, this.width, this.height)
        // image(game.garbage, 100, 100, 50, 50)

        // image(game.plasticBag, 50, 50, 50, 50)

        // image(game.mouse, 150, 150, 40, 40)

    }    

    collision() {
        let distanceX = game.player.x - (this.x + this.width/2);
        let distanceY = game.player.y - (this.y + this.height/2);

        if (Math.abs(distanceX) < (game.player.width/2 + this.width/2) && Math.abs(distanceY) < (game.player.height/2 + this.height/2)) {
            this.x = random(width);
            this.y = random(height);
            return true;
        } else {
            return false;
        }
    }
        
        
}


