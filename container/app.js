import React, { Component } from 'react';
import Me from './me';
import Ground from './ground';
import Sky from './sky';
import { connect } from 'react-redux'
import { updateXPos } from '../app/actions'

class App extends Component{
	componentDidMount(){
		console.log("mounted");
		window.addEventListener('scroll',()=>{
			var y = document.body.scrollTop;
			console.log(updateXPos)
			updateXPos(y);
		});
	}

	render(){
		return(
			<div>
				<Sky />
				<Me />
				<Ground />
			</div>
		) 

	}
}
const mapStateToProps = (state)=>{
	console.log(state)
}

const mapDispatchToProps = (dispatch)=>{
	return {
		updateXPos: ()=>dispathc(updateXPos)
	}
}


export default connect(mapDispatchToProps)(App);
