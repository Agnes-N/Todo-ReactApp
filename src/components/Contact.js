import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';

class Contact extends Component {
    state = {
      todos: [
        { id: 1, content: 'buy decoration materials' },
        { id: 2, content: 'play cards' },
        { id: 3, content: 'level up in react' }
      ]
    }
    deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos
      })
    }
    addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
        todos
      })
    }
    render() {
      return (
        <div className="app container">
          <h1 className="center green-text">Todo App</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      );
    }
  }
  
export default Contact;
 