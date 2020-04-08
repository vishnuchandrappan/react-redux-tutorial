import React, { Component } from "react";
import { Route } from "react-router-dom";
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
            "https://i2.wp.com/desirecourse.net/wp-content/uploads/2020/04/8844488884.jpg?w=750&ssl=1",
        },
        {
          id: 2,
          title: "Post Two",
          image:
            "https://i0.wp.com/desirecourse.net/wp-content/uploads/2019/06/897977.jpg?resize=480%2C270&ssl=1",
        },
        {
          id: 3,
          title: "Post Three",
          image:
            "https://stackify.com/wp-content/uploads/2018/12/Ruby-Frameworks-1-881x441.jpg",
        },
      ],
    };
  }

  removePhoto = (photo) => {
    this.setState({
      posts: this.state.posts.filter((post) => post.id !== photo),
    });
  };

  render() {
    return (
      <div className="App">
        <Header title="PhotoWall" />

        <Route path="/" exact>
          <Wall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </Route>

        <Route path="/new" component={New} />
      </div>
    );
  }
}
