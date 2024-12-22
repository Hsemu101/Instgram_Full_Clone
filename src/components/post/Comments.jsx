import React, { useState } from "react";
import { formatDistance } from "date-fns";
import AddingComment from "./AddingComment";

function Comment({ AllComments, TimePosted, DocID, FocusComment }) {
  const [comments, SetComments] = useState(AllComments);
  const [commentSlicer, setCommentSlicer] = useState(3);

  function viewAllComments() {
    setCommentSlicer(commentSlicer + 8);
  }

  return (
    <>
    <div className="w-full bg-white">
      <div className="pl-4">
        {comments.slice(0, commentSlicer).map((index, number) => (
          <div
            key={`${index.displayName}-${index.comment}`}
            className="flex gap-4"
          >
            <p>{`${index.displayName}:`}</p>
            <p className="font-normal">{index.comment}</p>
          </div>
        ))}
      </div>
      {comments.length >= 3 && commentSlicer < comments.length && (
        <div className="pl-4">
          <button
            onClick={viewAllComments}
          >{`view all ${comments.length} comments`}</button>
        </div>
      )}
      {/* <p>
      {formatDistance(TimePosted, new Date())} ago
      </p> */}

      <AddingComment DocID={DocID} SetComments={SetComments} comments={comments} FocusComment={FocusComment}  />
      </div>
    </>
  );
}

export default Comment;
