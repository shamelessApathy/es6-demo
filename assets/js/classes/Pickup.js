class Pickup extends GameObject
{
	constructor(x = 0, y =0)
	{
		super();

		Pickup.instances.push(this);

		this.x = x;
		this.y = y;
		this.width = 32;
		this.height = 32;
	}

	render()
	{
		Stage.instance.context.fillStyle = '#0e0';
		Stage.instance.context.fillRect(this.left, this.top, this.width, this.height);
	}

	destroy()
	{
		super.destroy();

		let index = Pickup.instances.indexOf(this);
		if ( index >= 0) Pickup.instances.splice(index , 1);
	}
}


Pickup.instances = [];

module.exports = Pickup;