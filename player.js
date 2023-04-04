class Player {
    constructor() {
        this.width = 120
        this.height = 140
        this.x = 0
        this.y = 400
    }

    draw() {
		image(game.playerImage, this.x, this.y, this.width, this.height)

        if (keyIsDown(LEFT_ARROW)) {
            if (this.x > 0) this.moveLeft()
        }
        if (keyIsDown(RIGHT_ARROW)) {
			if (this.x < windowWidth - this.width) this.moveRight()
		}

		if (keyIsDown(UP_ARROW)) {
			if (this.y > 0) this.moveUp()
		}

		if (keyIsDown(DOWN_ARROW)) {
			if (this.y < windowHeight - this.height) this.moveDown()
		}
    }

    moveUp() {
        this.y -= 50
        game.items.forEach(item => {
            item.collision()
        })
    }

    moveDown() {
        this.y += 50
        game.items.forEach(item => {
            item.collision()
        })
    }

    moveLeft() {
        this.x -= 50
        game.items.forEach(item => {
            item.collision()
        })
    }

    moveRight() {
        this.x += 50
        game.items.forEach(item => {
            item.collision()
        })
    }

    
}