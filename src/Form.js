import React from 'react'

export class Form extends React.Component{
	state = {
		value: ''
	}
	constructor(props){
			super(props);
			this.state = {value: ''};
			this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event){
		event.preventDefault();
		this.props.addNote(this.state.value);
		this.setState({ value: ''})
	}

	handleChange = (e) => this.setState( {value: e.target.value})

	render(){
		return(
		<form onSubmit={this.handleSubmit}>
		<label>
		Add a note:
		<input type="text" value={this.state.value} onChange={this.handleChange}/>
		</label>
		<input type="submit" value="add"/>
		</form> );
	}
}