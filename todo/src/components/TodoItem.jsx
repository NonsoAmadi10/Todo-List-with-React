import React, { Component } from 'react'
import PropTypes from 'prop-types';


class TodoItem extends Component {

  getStyle =()=>{
    return {
      background: 'royalblue',
      color: '#fff',
      padding: '20px',
      fontSize: '1.5rem',
      borderBottom:'1px dotted #ddd',
      textDecoration: this.props.todo.completed? 'line-through': 'none'
    }
    }

    
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle()}>
        <p>
        <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={deleteStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const deleteStyle = {
  background: '#f00',
  color: '#ddd',
  borderRadius: '50%',
  border: 'none',
  cursor:'pointer',
  float: 'right',
  padding: '5px 10px'

}
export default TodoItem;