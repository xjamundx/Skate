(function init() {
	var body = document.body
	var canvas = document.getElementById("game")
	var ctx = canvas.getContext('2d')
	var skater = new Skater()
	var game = new Game(ctx, 500, 500)
	game.start()
	game.addActor(skater)
})()