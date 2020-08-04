import React from "react";

const CommentActions = (props) => {
  const { comments } = props;
  return comments.length ? (
    <div className="box">
      {comments.map((_comment, _index) => (
        <p key={_comment.id} title={_comment.name}>
          {_index}: {_comment.email}
        </p>
      ))}
    </div>
  ) : (
    "Loading..."
  );
};

export default CommentActions;
