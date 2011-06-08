function Game(ctx, width, height) {
	this.ctx = ctx
	this.width = width
	this.height = height
	this.actors = []
}

Game.prototype.start = function() {
	var game = this
	setInterval(function() {
		game.tick()
		game.draw()
	}, 50)
}

Game.prototype.addActor = function(actor) {
	this.actors.push(actor)
}

Game.prototype.tick = function() {
	var game = this
	this.actors.forEach(function(actor) {
		actor.tick()
	})
}

Game.prototype.draw = function() {
	var game = this
	this.actors.forEach(function(actor) {
		actor.draw(game.ctx)
	})
}