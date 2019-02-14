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
		<form className="form" onSubmit={this.handleSubmit}>
		<input type="text" style={{flex: '10', padding: '5px'}}value={this.state.value} placeHolder = "Add a new note" onChange={this.handleChange}/>
		<input className="btn" type="submit" value="add"/>
		</form> );
	}
}