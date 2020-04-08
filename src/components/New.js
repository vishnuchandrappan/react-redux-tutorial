import React, { Component } from "react";

class New extends Component {
  constructor() {
    super();
    this.state = {
      photo: {
        title: "",
        image: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add New Photo</h1>
        <div className="form-group">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" />
        </div>
        <div className="btn-container">
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default New;
