function Skater() {
	this.img = new Image()
	this.img.src = "skater.png"
	this.x = 250
	this.y = 250
	this.angle = 0.0
}

Skater.prototype.draw = function(ctx) {
	ctx.drawImage(this.img, this.x, this.y)
}

Skater.prototype.tick = function() {
	this.x += 1
}
