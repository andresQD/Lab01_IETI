import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

export class TodoApp extends React.Component {


  constructor(props) {
    super(props);
    this.state = { items: this.props.lista, text: '', date: Date.now(), prioridad: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    var _style;
    _style = {
      color: "blue"
    }
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
            </label>
          <input
            id="new-todotexto"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />

          <label htmlFor="new-todo">
            Date
            </label>
          <input
            id="new-tododate"
            type="Date"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <br />

          <label htmlFor="new-todo">
            Priority
            </label>
          <input
            id="new-todoprio"
            onChange={this.handleChange}
            value={this.state.prioridad}
          />
          <br />

          <button style={_style}>
            Add #{this.state.items.length + 1}
          </button>
        </form>

      </div>
    );
  }

  handleChange(e) {
    if (e.target.id === "new-todotexto") {
      this.setState({ text: e.target.value });
    } else if (e.target.id === "new-tododate") {
      this.setState({ date: e.target.value });
    } else if (e.target.id === "new-todoprio") {
      this.setState({ prioridad: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      dueDate: this.state.date,
      priority: this.state.prioridad
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}