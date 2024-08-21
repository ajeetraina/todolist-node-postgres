import React from "react";
import axios from "axios";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newTodo = { text: this.state.value, completed: false };
      const response = await axios.post("/api/todos", newTodo);

      // Clear the input field
      this.setState({ value: "" });

      // Notify the parent component that a new todo has been added
      this.props.onAddTodo(response.data);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}