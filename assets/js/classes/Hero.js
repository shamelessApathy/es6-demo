class Hero extends GameObject
{
	constructor()
	{
		super();

		if (Hero.instance) Hero.instance.destroy();
		Hero.instance = this;

		this.width = 32;
		this.height = 32;
		this.color = '#00a6ef';

		setTimeout(() => {
			this.right = Stage.instance.right;
		}, 500)
	}

	render()
	{
		Stage.instance.context.fillStyle = this.color;
		Stage.instance.context.fillRect(this.left, this.top, this.width, this.height);
	}

	destroy()
	{
		super.destroy();

		Hero.instance = undefined;
	}
}

module.exports = Hero;