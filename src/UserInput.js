import React, { Component } from 'react';
import logo from './logo.svg';

import TaskList from './TaskList.js';


class UserInput extends Component {
	constructor(props){
		super(props)
//this refers to UserInput class:
		this.state = {
			taskInput:'',
			taskList: []
		}
	}

//ES6 version:
	getUserInput=(e)=>{
		// console.log(e.target.value); //the value of the event itself.
		// console.log(e); //this is the event.
		this.setState({taskInput: e.target.value})
	}

	addToList=()=>{
		this.state.taskList.push(this.state.taskInput)
		this.setState({taskInput: ''})
		console.log(this.state);
	}
// Note: .bind() will bind the context where the function 
// was executed.
  render() {
    return (
      <div className="App">
      <input value={this.state.taskInput}
      type="text" onChange={this.getUserInput.bind(this)}/>
      <button 
      onClick={this.addToList} 
      className = "btn btn-primary"> Add Task </button>

	<TaskList tasks={this.state.taskList} />

      </div>
    );
  }
}

export default UserInput;