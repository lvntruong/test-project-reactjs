import axios from "axios";

export const removeComment = (index) => ({
  type: "REMOVE_COMMENT",
  payload: { index },
});

export const reloadCommentSuccess = (data) => ({
  type: "RELOAD_COMMENT",
  payload: data,
});

export const reloadComment = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        dispatch(reloadCommentSuccess(res.data));
      })
      .catch((err) => {
        // TODO: reloadCommentFail
      });
  };
};
