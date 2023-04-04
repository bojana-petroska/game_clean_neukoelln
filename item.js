class Item {
    constructor(image) {
        this.image = image;
        this.x = random(1000);
        this.y = random(500);
        this.width = 70;
        this.height = 70;
        this.items = []
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }    

    collision() {
        let distanceX = game.player.x - (this.x + this.width/2);
        let distanceY = game.player.y - (this.y + this.height/2);

        if (Math.abs(distanceX) < (game.player.width/2 + this.width/2) && Math.abs(distanceY) < (game.player.height/2 + this.height/2)) {
            this.x = random(width);
            this.y = random(height);
            checkCollision()
            return true;
        } else {
            return false;
        }
    }        
}


