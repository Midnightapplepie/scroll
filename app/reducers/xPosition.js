const xPosition = (state,action) =>{
	switch(action.type){
		case 'SCROLL_DOWN':
			console.log(action.xPos)
			return {xPos: action.xPos}
		default:
			return false
	}
}

export default xPosition