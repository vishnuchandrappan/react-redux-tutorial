import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h1>{props.title}</h1>
      </Link>
      <Link to="/new">
        <button>+</button>
      </Link>
    </div>
  );
}
