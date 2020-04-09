import posts from "../data/posts";

const postReducer = (state = posts, action) => {
  switch (action.type) {
    case "REMOVE_PHOTO":
      return state.filter((post) => post.id !== action.id);

    case "NEW_PHOTO":
      return [action.photo, ...state];

    default:
      return state;
  }
};

export default postReducer;
