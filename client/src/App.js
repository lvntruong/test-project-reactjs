import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DevTestImage from "./assets/images/dev-test-img.svg";
import { reloadComment } from "./actions";
import CommentActions from "./components/comment-actions";
import CommentsList from "./components/comments-list";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    handlePullData();
  }, []);

  const handlePullData = () => {
    dispatch(reloadComment());
  };

  const comments = useSelector((state) => state.comments);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="left"></div>
        <div className="right">
          <div>
            <img src={DevTestImage} />
          </div>
          <CommentsList comments={comments} />
          <CommentActions handlePullData={handlePullData} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
