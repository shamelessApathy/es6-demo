class Game
{
	constructor()
	{
		if (Game.instance) Game.instance.destroy();
		Game.instance = this;

		this.element = jQuery('#app');

		new Stage();

		new Hero();


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
}

module.exports = Game;