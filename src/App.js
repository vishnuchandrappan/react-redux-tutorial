import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import Header from "./components/Header";
import New from "./components/New";
import Wall from "./components/Wall";
import * as actions from "./redux/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="PhotoWall" />

        <Route path="/" exact>
          <Wall {...this.props} />
        </Route>
        <Route
          path="/new"
          render={({ history }) => <New onHistory={history} {...this.props} />}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
