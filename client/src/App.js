import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import DevTestImage from "./assets/images/dev-test-img.svg";

const App = (_) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    handlePullData();
  }, []);

  const handlePullData = () => {
    axios
      .get("http://localhost:3001")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const handleRemoveComment = () => {
    if (index) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <div className="left"></div>
        <div className="right">
          <div>
            <img src={DevTestImage} />
          </div>
          {data.length ? (
            <div className="box">
              {data.map((_comment, _index) => (
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
            <input type="text" onChange={(e) => setIndex(e.target.value)} />
            <button onClick={handleRemoveComment}>Remove</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
