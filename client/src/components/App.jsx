import React, { Component } from 'react';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
		return (
			<div> 
				<Header />
				<div id="body-section">
					App works
				</div>
			</div>
		);
	}
}

export default App;