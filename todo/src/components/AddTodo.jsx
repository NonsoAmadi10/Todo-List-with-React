import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
 // component level state

 state ={
  task: ''
 }

 onChange =(e)=> this.setState({task: e.target.value})
 onSubmit =(e) => {
  e.preventDefault()
  this.props.addTodo(this.state.task);
  this.setState({task: ''})
 }
  render() {
    return (
      <div>
        <form  onSubmit={ this.onSubmit } style={{display:'flex'}}>
         <input 
         type="text" 
         name="task" 
         placeholder="Add Task .." 
         style={{flex: 10, padding:'7px' }} 
         value={ this.state.task}
         onChange={ this.onChange }/>
         <button type="submit" className='btn-submit' style={{flex: 1}}> Submit</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}