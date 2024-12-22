import React, { useEffect, useReducer, useState } from "react";
import { PhotosRetriverProfile } from "../../services/FirebaseFunctions";
import Header from "./header";
import PhotosProfile from "./Photos";

function MainChildProfile({ ProfileParam }) {
  const [check, setCheck] = useState("");

  function reducer(state, newState) {
    return { ...state, ...newState };
  }

  const Initalize = { profile: {}, photoCollection: null, followerCount: 0 };

  const [state, dispatch] = useReducer(reducer, Initalize);

  useEffect(() => {
    async function RetrivingPhotoFile() {
      const TargetPhotos = await PhotosRetriverProfile(ProfileParam?.userId);
      dispatch({
        profile: ProfileParam,
        photoCollection: TargetPhotos,
        followerCount: ProfileParam.followers.length,
      });
    }
    RetrivingPhotoFile();
  }, [ProfileParam.userId]);



  return state ? (
    <>
      <Header
        PhotoCount={state.photoCollection? state.photoCollection.length : 0 }
        TargetProfile={state.profile}
        FollowerCount={state.followerCount}
        setFollowerCount={dispatch}
      />
      <PhotosProfile photoCollection={state.photoCollection} />
    </>
  ) : null;
}

export default MainChildProfile;
