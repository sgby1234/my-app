import React, { Component } from 'react'
import { Note } from './Note'

export class AllNotes extends Component {
  render() {
    return this.props.notes.map((aNote) => (
        <Note text={aNote}/>
    ));
  }
}

export default AllNotes
