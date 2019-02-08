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
	  )
	}

}

export default App;
