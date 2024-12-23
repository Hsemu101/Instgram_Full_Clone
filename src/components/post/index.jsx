import React, { useRef, useContext, useState } from "react";
import Header from "./header";
import Picture from "./Image";
import Action from "./Action";
import AuthListnerContext from "../../context/UserAuthContext";
import FirebaseContext from "../../context/firebase";
import Comment from "./Comments";
import Footer from "./footer";

function MainParent({ AllPictureFiles }) {
  const FocusComment = useRef(null);

  const handleRef = () => {
    FocusComment.current.focus();
  };
  const { UserDetail } = useContext(AuthListnerContext);
  const { firebase, fieldValue } = useContext(FirebaseContext);
  const [countLikes, setCountLikes] = useState(AllPictureFiles.likes.length);
  const [LikeToggler, SetToggler] = useState(AllPictureFiles.IsLiked);
  const ClickLikeTrigger = async () => {
    SetToggler((LikeToggler) => !LikeToggler);

    await firebase
      .firestore()
      .collection("photos")
      .doc(AllPictureFiles.docId)
      .update({
        likes: LikeToggler
          ? fieldValue.arrayRemove(UserDetail.uid)
          : fieldValue.arrayUnion(UserDetail.uid),
      });
    setCountLikes((countLikes) =>
      LikeToggler ? countLikes - 1 : countLikes + 1
    );
  };
  return (
    <>
      <div className=" lg:flex flex-col lg:flex-wrap lg:items-center font-bold lg:mb-4 sm:ml-8 ">
        <Header Name={AllPictureFiles.username} />
        <Picture
          src={`${import.meta.env.BASE_URL}${AllPictureFiles.imageSrc}`}
          DocID={AllPictureFiles.docId}
          likes={countLikes}
          Isliked={LikeToggler}
          ClickLikeTrigger={ClickLikeTrigger}
        />
        <Action
          DocID={AllPictureFiles.docId}
          likes={countLikes}
          Isliked={LikeToggler}
          handleRef={handleRef}
          src={AllPictureFiles.imageSrc}
          ClickLikeTrigger={ClickLikeTrigger}
          SetToggler={SetToggler}
        />

        <Footer
          Captions={AllPictureFiles.caption}
          Name={AllPictureFiles.username}
        />

        <Comment
          AllComments={AllPictureFiles.comments}
          TimePosted={AllPictureFiles.dateCreated}
          DocID={AllPictureFiles.docId}
          FocusComment={FocusComment}
        />
      </div>
    </>
  );
}

export default MainParent;
