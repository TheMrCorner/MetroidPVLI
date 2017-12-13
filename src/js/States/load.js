var loadState = {
	//preload es una funcion de phaser que se llama una sola vez y se suele usar para cargar los recursos
	preload: function(){

		var loading = game.add.text(80,150,'loading...',{font: '40px Courier', fill: '#FFF'}); //una textito de carga

		//game.load.image('dude', 'assets/PlayerThings/personaje.png'); //Cargamos tooodos los recursos que vamos a necesitar
		game.load.spritesheet('dude', 'assets/PlayerThings/samus.png', 33, 64);
    	game.load.image('hand', 'assets/PowerUps/hand.png');
    	game.load.image('spike', 'assets/Enemies/spikes.png');
    	game.load.spritesheet('bala', 'assets/PlayerThings/bala.png', 112, 176);
    	game.load.spritesheet('rocket', 'assets/PlayerThings/rocket.png', 112, 176);
    	game.load.tilemap('mapaA', 'assets/Map/Brinstar5.json', null, Phaser.Tilemap.TILED_JSON); //el primer tile
    	game.load.image('gameTiles', 'assets/Map/s78s2.png'); //las imagenes del tile
    	game.load.spritesheet('bomba', 'assets/PlayerThings/bomba.png', 25, 57); //las imagenes del tile
    	console.log("Cargando..."); //simple debug
	},

	create: function(){

		//Llamamos al siguiente estado --> menu
		game.state.start('menu');
	}
};
