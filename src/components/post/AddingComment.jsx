import React, { useContext, useState, useEffect } from "react";
import AuthListnerContext from "../../context/UserAuthContext";
import LeadingToHeader from "../../hooks/FullUser";
import FirebaseContext from "../../context/firebase";

function AddingComment({ DocID, SetComments, comments, FocusComment }) {
  const { UserDetail } = useContext(AuthListnerContext);
  const { user } = LeadingToHeader(UserDetail?.uid);
  const displayName = user?.username;
  const { firebase, fieldValue } = useContext(FirebaseContext);
  const [InstantComments, SetInstantComments] = useState("");

  const DoesNotExist = InstantComments.trim().length === 0;

  function OnCommentClick(e) {
    e.preventDefault();
    const newComment = { displayName, comment: InstantComments };
    SetComments([...comments, newComment]);
    SetInstantComments("");

    firebase
      .firestore()
      .collection("photos")
      .doc(DocID)
      .update({ comments: fieldValue.arrayUnion(newComment) });
  }

  return (
    <>
      <div className="w-full">
        <form
          className="mt-5 px-4  pb-5 flex gap-4 w-full  "
          action="post"
          onSubmit={(event) =>
            InstantComments.length <= 0
              ? event.preventDefault()
              : OnCommentClick(event)
          }
        >
          <input
            className="text-[15px] py-2 flex items-center bg-white w-full ml-2 AddComment-pl pl-4 text-black font-medium "
            type="text"
            placeholder="Add a comment..."
            onChange={(execute) => SetInstantComments(execute.target.value)}
            value={InstantComments}
            ref={FocusComment}
          />

          <button
            className={`font-bold  flex  transition-opacity duration-700 ${
              DoesNotExist ? "opacity-0" : "opacity-100"
            }  text-[#35aaf8]`}
            type="button"
            onClick={(e) => {
              if (InstantComments.trim().length > 0) {
                OnCommentClick(e);
              } else {
                console.log("empty comments not permitted");
              }
            }}
          >
            post
          </button>
        </form>
      </div>
    </>
  );
}

export default AddingComment;
