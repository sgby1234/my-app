import React, { Component } from 'react';
import './App.css';
import { Note } from './Note'
import { Form } from './Form'
import {AllNotes} from './AllNotes'

class App extends Component {
	state = {
		notes: []
	}

	addNote = (note) =>{
	let newArr = this.state.notes.slice();
	newArr.push(note);
	this.setState({ notes: newArr});	
 }
 
 render() {
	  return (
		  <div> 
			  <h1 className='header'>Your notes</h1>
			  <Form  addNote={this.addNote}/>
			  <AllNotes notes={this.state.notes}/> 
		  </div>
	  
	  );
	}
}

export default App;
