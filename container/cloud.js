import React,{Component} from 'react';

class Cloud extends Component{


	render(){
		const left = {
			left: this.props.left
		}
		return(
			<div className="cloud"
				 style={left}>
				<div className="cloud-1"></div>
				<div className="cloud-2"></div>
				<div className="cloud-3"></div>
				<div className="cloud-4"></div>
				<div className="cloud-5"></div>
			</div>
		);
	}
}

export default Cloud;