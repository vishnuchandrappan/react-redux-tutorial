import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";

// import { Route } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import New from "./components/New";
// import Wall from "./components/Wall";

class App extends Component {
  // removePhoto = (photo) => {
  //   this.setState({
  //     posts: this.state.posts.filter((post) => post.id !== photo),
  //   });
  // };

  // addNewPhoto = (photo) => {
  //   photo.id = uuidv4();
  //   this.setState({
  //     posts: [photo, ...this.state.posts],
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Header title="PhotoWall" />

        {
          //   <Route path="/" exact>
          //   <Wall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
          // </Route>
          // <Route
          //   path="/new"
          //   render={({ history }) => (
          //     <New
          //       onAddPhoto={(photo) => {
          //         this.addNewPhoto(photo);
          //         history.push("/");
          //       }}
          //     />
          //   )}
          // />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

export default connect(mapStateToProps)(App);
