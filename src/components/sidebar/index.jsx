import React, { useContext } from "react";
import AuthListnerContext from "../../context/UserAuthContext";
import FirebaseContext from "../../context/firebase";
import LeadingToHeader from "../../hooks/FullUser";
import Suggestion from "./suggestion";
import SuggestedProfile from "./SuggestedProfile";

function Sidebar() {
  const { firebase } = useContext(FirebaseContext);
  const { UserDetail } = useContext(AuthListnerContext);
  const { user } = LeadingToHeader(UserDetail?.uid);
  // const userId = user?.userId
  // console.log(userId)
  console.log("IndexUser", user);
  return (
    <>
      <Suggestion
        userid={user?.userId}
        following={user?.following}
        docid={user?.docId}
      />
     
    </>
  );
}

export default Sidebar;
