import * as Controller from '../libraries/Controller';
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
		this.speed = 8;
		this.center = Stage.instance.center;

		
	}

	update()
	{
		if (Controller.isDown(Controller.W)) this.y -= this.speed;
		if (Controller.isDown(Controller.A)) this.x -= this.speed;
		if (Controller.isDown(Controller.D)) this.x += this.speed;
		if (Controller.isDown(Controller.S)) this.y += this.speed;

		if (this.top < Stage.instance.top) this.top = Stage.instance.top;
		if (this.left < Stage.instance.left) this.left = Stage.instance.left;
		if (this.right > Stage.instance.right) this.right = Stage.instance.right;
		if (this.bottom > Stage.instance.bottom) this.bottom = Stage.instance.bottom;

		for (let wall of Wall.instances) {
			let isColliding = this.isColliding(wall);
			if (!isColliding) continue;

			if (isColliding === 'top') this.top = wall.bottom;
			if (isColliding === 'left') this.left = wall.right;
			if (isColliding === 'bottom') this.bottom = wall.top;
			if (isColliding === 'right') this.right = wall.left;
		}

		for (let pickup of Pickup.instances)
		{
			if (this.isColliding(pickup)) {
				pickup.destroy();
				++Game.instance.score;
				break;
			}
		}
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