import React, { Component } from 'react';
import Me from './me';
import Ground from './ground';
import Sky from './sky';

class App extends Component{

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

export default App;
