class Stage
{
	constructor()
	{
		if (Stage.instance) Stage.instance.destroy();
		Stage.instance = this;

		this.element = jQuery('<canvas class="stage"></canvas>');
		Game.instance.element.append(this.element);

		this.canvas = this.element.get(0);
		this.context = this.canvas.getContext('2d');

		this.element.attr({
			width: this.width,
			height: this.height
		});
	}

	update()
	{
		//
	}

	render()
	{
		this.context.clearRect(this.left, this.top, this.width, this.height);
	}
	get width()
	{
		return this.element.outerWidth()
	}
	get height()
	{
		return this.element.outerHeight();
	}
	get top()
	{
		return 0;
	}

	get left()
	{
		return 0;
	}

	get bottom()
	{
		return this.top + this.height;
	}

	get right()
	{
		return this.left + this.width;
	}
	destroy()
	{
		Stage.instance = undefined;
	}
}


module.exports = Stage;