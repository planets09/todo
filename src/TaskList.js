import React, { Component } from 'react';
import logo from './logo.svg';


class TaskList extends Component {
	constructor(props){
		super(props)
	}

//Use .map over the task in tasks, also obtains the index
//of each task. Now you will return/render each task.
  render() {
    return (
      <div className="App">
      {this.props.tasks.map((task, idx)=>{
      	return <li key={idx}>{task}</li>
      })}
      
      </div>
    );
  }
}

export default TaskList;