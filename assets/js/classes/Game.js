class Game
{
	constructor()
	{
		if (Game.instance) Game.instance.destroy();
		Game.instance = this;

		this.element = jQuery('#app');
		this.scoreBoard = jQuery('<div class="scoreboard"></div>');

		this.element.append(this.scoreBoard);

		this.score = 0;

		new Stage();

		new Hero();


		new Wall(32,32,240,32);
		new Wall(Stage.instance.right - 128, 96, 96, 320);
		new Wall(32, Stage.instance.bottom - 64, 640, 32);

		new Pickup(64, 96);
		new Pickup(128, 240);
		requestAnimationFrame(this.loop.bind(this));
	}

	loop()
	{
		this.update();
		this.render();

		this.animationFrame = requestAnimationFrame(this.loop.bind(this));
	}

	update()
	{
		Stage.instance.update();
		for (let gameObject of GameObject.instances) gameObject.update();
	}

	render()
	{
		Stage.instance.render();
		for (let gameObject of GameObject.instances) gameObject.render();

	}

	destroy()
	{
		Game.instance = undefined;
		if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
	}

	get score()
	{
		return this._score;
	}

	set score(value)
	{
		this._score = value;

		this.scoreBoard.text(`Score: ${value}`);
	}
}

module.exports = Game;