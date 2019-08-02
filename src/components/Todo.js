import React from 'react'
import buttonStyles from '../styles/button.module.css'
import todoStyles from '../styles/todo.module.css'
function Todo(props) {
  return (
    <div className={todoStyles.todoStartAnimation}>
      <div className={todoStyles.todo}
        style={{
          border: props.todo.complete ? '1px dashed black' : '1px solid white'
        }}
        onClick={props.toggleComplete}
      >
        <div
          style={{
            display: 'inline-block',
            textDecoration: props.todo.complete ? 'line-through' : '',
          }}

        >{props.todo.text}</div>
      </div>
      <button
        style={{
          backgroundColor: props.todo.complete ? '#ff00008c' : '#3498db',
          color: props.todo.complete ? 'white' : 'black'
        }}
        className={buttonStyles.buttonDelete}
        onClick={props.handleDelete}>Delete</button>

    </div>
  )
}


export default Todo