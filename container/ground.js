import React, {Component} from 'react';
import Obstacles from './obstacles';

class Ground extends Component{
	planObstacles(n){
		var x = 0;
		var distances = [5000,3000,2000];
		var obstacles = _.fill(Array(n),null);

		return obstacles.map(function(o,i){
			var key = `obstacle-${i}`;
			x+= _.sample(distances);

			return <Obstacles left={x + "px"} key={key}/>
		})
	}

	render(){
		return(
			<div id="ground">
				{this.planObstacles(4)}
			</div>
		);
	}
}

export default Ground;