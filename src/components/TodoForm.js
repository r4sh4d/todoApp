import React, { Component } from 'react'
import inputStyles from '../styles/input.module.css'
import buttonStyles from '../styles/button.module.css'
class TodoForm extends Component {
  state = {
    textInput: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit({
      text: this.state.textInput,
      complete: false,
      id: new Date().valueOf()
    })
    this.setState({ textInput: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={inputStyles.todoAddInput}
          name="textInput"
          type="text"
          value={this.state.textInput}
          onChange={this.handleChange}
          placeholder="Add a todo"
        />
        <button className={buttonStyles.buttonAdd}>Add</button>
      </form>
    )
  }
}

export default TodoForm