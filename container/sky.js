import React,{Component} from 'react';
import Cloud from './cloud';
import _ from 'lodash';

class Sky extends Component{
	clouds(n){
		var x = 0;
		var min_x = 100;
		var clouds = _.fill(Array(n),null);
		var distance = [-100,-200, 600, 200, 1000];

		return _.map(clouds,function(cloud, i){
			var dis = _.sample(distance);
			x+=dis;
			var key = 'cloud-' + i;

			return <Cloud key={key} left={x + "px"}/>
		})
	};

	render(){
		var clouds = React.Children.map(this.props.children,function(c){

		})
		return(
			<div id="sky">
				{this.clouds(20)}
			</div>
		);
	}
}

export default Sky;