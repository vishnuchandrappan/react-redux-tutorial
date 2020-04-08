import PropTypes from "prop-types";
import React from "react";
import Card from "./Card";
export default function Wall(props) {
  return (
    <div className="wall">
      {props.posts.map((post) => (
        <Card post={post} key={post.id} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

Wall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};
