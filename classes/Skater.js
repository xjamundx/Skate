function Skater(x, y) {
	this.img = new Image()
	this.img.src = "skater.png"
	this.x = x
	this.y = y
	this.angle = 0.0
	this.velocity = Skater.VELOCITY_FORWARD
}


Skater.prototype = new Actor()

Skater.prototype.draw = function(ctx) {
	ctx.drawImage(this.img, this.x, this.y)
}

Skater.prototype.tick = function() {
	this.x += 5
}