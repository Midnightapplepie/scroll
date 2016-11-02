let xPosition = 0;

export const updateXPos = (y) =>({
	type: 'SCROLL_DOWN',
	xPos: xPosition += y
})