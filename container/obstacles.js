import React,{Component} from 'react';

class Obstacles extends Component{
	render(){
		var h = _.sample(["200px","300px","500px"]);

		var top = {
			top: `-${h}`,
			left: this.props.left
		}

		var size = {
			width: _.sample(["500px","300px","700px"]),
			height: h
		}

		return(
			<div className="obstacle-container" 
				 style={top}>
				<div className="base" style={size}></div>
			</div>
		);
	}
}

export default Obstacles;