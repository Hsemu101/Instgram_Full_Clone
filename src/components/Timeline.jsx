import React, { useContext } from "react";
import LeadingToHeader from "../hooks/FullUser";
import AuthListnerContext from "../context/UserAuthContext";
import { PhotoFileHook } from "../hooks/GetPhotos";
import MainParent from "./post";

function Timeline() {
  const { UserDetail } = useContext(AuthListnerContext);
  const { user } = LeadingToHeader(UserDetail?.uid);
  // console.log("fullInfo", user)
  const { PictureFiles } = PhotoFileHook(user);
  console.log("This are the pictureFIles", PictureFiles);

  return (
    <>
      <div className=" lg:flex lg:flex-col lg:flex-wrap lg:items-end pr-[5rem] container col-span-2 mt-5   ">
        {user?.following == 0 ? (
          <div>Please start following users to see your timeline</div>
        ) : PictureFiles ? (
          PictureFiles.map((index, NumberTracker) => (
            <MainParent
              key={`This is the key ${index.docId}`}
              AllPictureFiles={index}
            />
          ))
        ) : null}
      </div>
    </>
  );
}

export default Timeline;
