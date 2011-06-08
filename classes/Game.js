function Game(ctx, width, height) {
	this.ctx = ctx
	this.width = width
	this.height = height
	this.actors = []
	this.paused = false
}

Game.prototype.start = function() {
	var game = this
	setTimeout(function play() {
		game.tick()
		game.draw()
		if (!this.paused) setTimeout(play, 50)
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