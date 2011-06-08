function Actor() {
	this.x = 0
	this.y = 0
}

Actor.VELOCITY_FORWARD = 1
Actor.VELOCITY_BACKWARD = -1

Actor.prototype.draw = function() {
	// please extend me
}

Actor.prototype.tick = function() {
	this.x += 1
	this.y += 1
}

Actor.prototype.onHitsWall = function() {
	this.switchVelocity()	
}

Actor.prototype.switchVelocity = function() {
	this.velocity = Actor.VELOCITY_FORWARD ? Actor.VELOCITY_BACKWARD : Actor.VELOCITY_FORWARD
}
