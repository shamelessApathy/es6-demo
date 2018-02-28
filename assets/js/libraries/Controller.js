const jquery = require('jquery');

export const W = 'w';
export const A = 'a';
export const S = 's';
export const D = 'd'; 

export let inputs = [];

export function isDown(input)
{
	let index = inputs.indexOf(input.toLowerCase());

	return index >= 0;
}

export function isUp(input)
{
	let index = inputs.indexOf(input.toLowerCase());

	return index < 0;
}


jQuery(document).on('keydown', (event)=> {
	let input = event.key.toLowerCase();
	let index = inputs.indexOf(input);

	if (index < 0 ) inputs.push(input);
});

jQuery(document).on('keyup', (event) => {
	let input = event.key.toLowerCase();
	let index = inputs.indexOf(input);

	if (index >= 0) inputs.splice(index, 1);
});