import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ParamsUserFinder } from "../services/FirebaseFunctions";
import * as ROUTES from "../constants/Route";
import Header from "../components/Header";
import MainChildProfile from "../components/Profile";

function Profile() {
  const History = useNavigate();
  const { username } = useParams();
  const [ParamUser, setParamUser] = useState("");

  useEffect(() => {
    async function Checklist() {
      const results = await ParamsUserFinder(username);

      if (results?.userId) {
        setParamUser(results);
      } else {
        History(ROUTES.PageNotFound);
      }
    }

    Checklist();
  }, [username, History]);

  return ParamUser?.username ? (
    <>
      <Header />
      <MainChildProfile ProfileParam = {ParamUser}/>
     
    </>
  ) : null;
}

export default Profile;
