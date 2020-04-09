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

  validated = () =>
    this.state.photo.title !== "" && this.state.photo.image !== "";

  handleSubmit = (e) => {
    e.preventDefault();
    this.validated()
      ? this.props.onAddPhoto(this.state.photo)
      : alert("Invalid Input Values");
  };

  changeHandler = (e, t) => {
    this.setState({
      photo: {
        title: t === "title" ? e.target.value : this.state.photo.title,
        image: t === "image" ? e.target.value : this.state.photo.image,
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add New Photo</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={this.state.photo.title}
            onChange={(event) => this.changeHandler(event, "title")}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            value={this.state.photo.image}
            onChange={(event) => this.changeHandler(event, "image")}
          />
        </div>
        <div className="btn-container">
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default New;
