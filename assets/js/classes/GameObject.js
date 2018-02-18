class GameObject
{
	constructor()
	{
		GameObject.instances.push(this);
		// x,y coords are always the top left corner of the gameobject
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
	}

	update()
	{
		//
	}

	render()
	{
		//
	}

	destroy()
	{
		let index = GameObjects.instances.indexOf(this);

		if (index >= 0) GameObject.instances.splice(index, 1);
	}


	// All the getters for GameObject class
	get top()
	{
		return this.y;
	} 

	get left()
	{
		return this.x;
	}

	get bottom()
	{
		return this.top + this.height;
	}

	get right()
	{
		return this.left + this.width;
	}

	get center()
	{
		return {
			x: this.left + (this.width /2),
			y: this.top + (this.height /2)
		};
	}


	// All the setters for the GameObject Class

	set top(value)
	{
		this.y =value;
	}
	set left(value)
	{
		this.x = value;
	}
	set bottom(value)
	{
		this.y = value - this.height;
	}
	set right(value)
	{
		this.x = value - this.width;
	}
	set center(value)
	{
		this.x = value.x - (this.width /2);
		this.y = value.y - (this.height /2);
	}
}

GameObject.instances = [];

module.exports = GameObject;