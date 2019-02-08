import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	  var cards = ["Card #1", "Card #2", "Card #3", "Card #4", "Card #5"];
	  return (
	  <div className="App">
	     <ul>{
				cards.map(function(card){
						return <li>{card}</li>;
		})
		 }
		 </ul>
		 </div>
		 renderForm()
	  )
	}
}

class Form extends Component{
	constructor(props){
			super(props);
			this.state = {value: ''};
			this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event){
		alert('text was submitted');
	}
	render(){
		return(
		<form onSubmit={this.handleSubmit}>
		<label>
		Add a note:
		<input type="text" value={this.state.value}/>
		</label>
		<input type="submit" value="add"/>
		</form> );
	}
}
export default App;
