import React from "react";
import axios from "axios";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos");
      this.setState({ todos: response.data });
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  handleActive = async (index) => {
    try {
      const todo = this.state.todos[index];
      const updatedTodo = { ...todo, completed: !todo.completed };

      const response = await axios.put(`/api/todos/${todo.id}`, updatedTodo);
      const updatedTodos = [...this.state.todos];
      updatedTodos[index] = response.data;

      this.setState({ todos: updatedTodos });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  renderTodos = (todos) => {
    return (
      <ul className="list-group">
        {todos.map((todo, i) => (
          <li
            className={
              "list-group-item cursor-pointer " +
              (i === this.state.activeIndex ? "active" : "")
            }
            key={i}
            onClick={() => {
              this.handleActive(i);
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                this.handleActive(i);
              }}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { todos } = this.state;

    return todos.length > 0 ? (
      this.renderTodos(todos)
    ) : (
      <div className="alert alert-primary" role="alert">
        No Todos to display
      </div>
    );
  }
}