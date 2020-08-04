import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import DevTestImage from "./assets/images/dev-test-img.svg";
import { removeComment, reloadComment } from "./actions";

const App = (props) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(null);

  useEffect(() => {
    handlePullData();
  }, []);

  const handleRemoveComment = () => {
    if (index) {
      dispatch(removeComment(index));
    }
  };

  const handlePullData = () => {
    dispatch(reloadComment());
  };

  const comments = useSelector((state) => state.comments);
  console.log(comments);

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
          <div>
            <button onClick={handlePullData}>Pull Data</button>
          </div>
          <div>
            <input type="number" onChange={(e) => setIndex(e.target.value)} />
            <button onClick={handleRemoveComment}>Remove</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
