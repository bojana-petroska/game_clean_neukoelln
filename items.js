class Item {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        image(game.garbage, 100, 100, 50, 50)

        image(game.plasticBag, 50, 50, 50, 50)

        image(game.mouse, 150, 150, 40, 40)

    }    

    collision(player) {
        let distanceX = player.x - (this.x + this.width/2);
        let distanceY = player.y - (this.y + this.height/2);

        if (Math.abs(distanceX) < (player.width/2 + this.width/2) && Math.abs(distanceY) < (player.height/2 + this.height/2)) {
            this.x = random(width);
            this.y = random(height);
            return true;
        } else {
            return false;
        }
    }
}
