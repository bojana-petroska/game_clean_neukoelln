class Player {
    constructor() {
        this.width = 60
        this.height = 100
        this.x = 0
        this.y = 400
    }

    draw() {
		image(game.playerImage, this.x, this.y, this.width, this.height)

        if (keyIsDown(LEFT_ARROW)) {
            if (this.x > 0) this.moveLeft()
        }
        if (keyIsDown(RIGHT_ARROW)) {
			if (this.x < 600 - this.width) this.moveRight()
		}

		if (keyIsDown(UP_ARROW)) {
			if (this.y > 0) this.moveUp()
		}

		if (keyIsDown(DOWN_ARROW)) {
			if (this.y < height - this.height) this.moveDown()
		}
    }

    moveUp() {
        this.y -= 10
    }

    moveDown() {
        this.y += 10
    }

    moveLeft() {
        this.x -= 10
    }

    moveRight() {
        this.x += 10
    }
}