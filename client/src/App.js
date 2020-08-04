import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DevTestImage from "./assets/images/dev-test-img.svg";
import { reloadComment } from "./actions";
import CommentActions from "./components/comment-actions";

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
          {comments.length ? (
            <div className="box">
              {comments.map((_comment, _index) => (
                <p key={_comment.id} title={_comment.name}>
                  {_index}: {_comment.email}
                </p>
              ))}
            </div>
          ) : (
            "Loading..."
          )}
          <CommentActions handlePullData={handlePullData} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
