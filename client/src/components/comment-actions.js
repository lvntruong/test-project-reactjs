import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../actions";

const CommentActions = (props) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(null);

  const handleRemoveComment = () => {
    if (index) {
      dispatch(removeComment(index));
    }
  };

  return (
    <div className="comment-actions">
      <div>
        <button onClick={props.handlePullData}>Pull Data</button>
      </div>
      <div>
        <input type="number" onChange={(e) => setIndex(e.target.value)} />
        <button onClick={handleRemoveComment}>Remove</button>
      </div>
    </div>
  );
};

export default CommentActions;
