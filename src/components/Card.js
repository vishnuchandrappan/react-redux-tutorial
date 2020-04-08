import PropTypes from "prop-types";
import React from "react";
export default function Card({ post, onRemovePhoto }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <img src={post.image} alt="" />
      <div className="btn-container">
        <button
          onClick={() => {
            onRemovePhoto(post.id);
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
  onRemovePhoto: PropTypes.func.isRequired,
};
