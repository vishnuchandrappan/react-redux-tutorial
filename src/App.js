import React, { Component } from "react";
import { Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import New from "./components/New";
import Wall from "./components/Wall";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          title: "Post One",
          image:
            "https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 2,
          title: "Post Two",
          image:
            "https://images.pexels.com/photos/2440296/pexels-photo-2440296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 3,
          title: "Post Three",
          image:
            "https://images.pexels.com/photos/4054069/pexels-photo-4054069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  }

  removePhoto = (photo) => {
    this.setState({
      posts: this.state.posts.filter((post) => post.id !== photo),
    });
  };

  addNewPhoto = (photo) => {
    photo.id = uuidv4();
    this.setState({
      posts: [photo, ...this.state.posts],
    });
  };

  render() {
    return (
      <div className="App">
        <Header title="PhotoWall" />

        <Route path="/" exact>
          <Wall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </Route>

        <Route
          path="/new"
          render={({ history }) => (
            <New
              onAddPhoto={(photo) => {
                this.addNewPhoto(photo);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}
