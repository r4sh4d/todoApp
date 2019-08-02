import React, { Component } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'
import todosContainerStyles from '../styles/todosContainer.module.css'
import buttonStyle from '../styles/button.module.css'
import ls from 'local-storage'

class TodoList extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    let todos = JSON.parse(ls.get('todos'))
    this.setState({ todos })
  }

  addTodo = todo => {
    const newText = todo.text.trim()
    if (newText)
      this.setState({
        todos: [todo, ...this.state.todos]
      }, () => ls.set('todos', JSON.stringify(this.state.todos)))
  }


  toggleComplete = id => {

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            complete: !todo.complete
          }
        else {
          return todo
        }
      })
    }, () => ls.set('todos', JSON.stringify(this.state.todos)))
  }

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    }, () => ls.set('todos', JSON.stringify(this.state.todos)))
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    }, () => ls.set('todos', JSON.stringify(this.state.todos)))
  }

  render() {
    const todoComponents = this.state.todos.map(todo =>
      <Todo
        key={todo.id}
        todo={todo}
        toggleComplete={() => this.toggleComplete(todo.id)}
        handleDelete={() => this.handleDelete(todo.id)}
      />)
    const completedTodos = this.state.todos.filter(todo => todo.complete).length;
    return (
      <div className={todosContainerStyles.todosContainer}>
        <TodoForm onSubmit={this.addTodo} />
        {todoComponents}
        {completedTodos > 0 ? <button
          className={buttonStyle.buttonFilterComplete}
          onClick={this.filterCompleted}>Delete completed todos
        </button> : null}
      </div>
    )
  }
}

export default TodoList