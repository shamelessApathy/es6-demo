class Wall extends GameObject
{
	constructor(x = 0, y = 0, width = 32, height = 32)
	{
		super();

		Wall.instances.push(this);

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	render()
	{
		Stage.instance.context.fillStyle = '#333';
		Stage.instance.context.fillRect(this.left, this.top, this.width, this.height);
	}

	destroy()
	{
		super.destroy();

		let index = Wall.instances.indexOf(this);
		if ( index >= 0) Wall.instances.splice(index , 1);
	}
}

Wall.instances = [];


module.exports = Wall;