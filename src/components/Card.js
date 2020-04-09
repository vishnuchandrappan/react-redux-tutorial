import PropTypes from "prop-types";
import React from "react";
export default function Card({ post, removePhoto }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <img src={post.image} alt="" />
      <div className="btn-container">
        <button
          onClick={() => {
            removePhoto(post.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
  removePhoto : PropTypes.func.isRequired
};
