(function init() {
	var body = document.body
	var canvas = document.getElementById("game")
	var ctx = canvas.getContext('2d')
	var skater = new Skater(250, 250)
	var game = new Game(ctx, 500, 500)
	game.addActor(skater)
	game.start()
})()