import React, { useContext } from "react";
import LeadingToHeader from "../hooks/FullUser";
import AuthListnerContext from "../context/UserAuthContext";
import { GetTheSuggestedUSers } from "../services/FirebaseFunctions";
import InstgramLogo from "../public/images/logo.png";
import HenokImage from "../public/images/avatars/Henok.jpg";
import DefaultImage from "../public/images/avatars/default.png";
import { useNavigate, Link } from "react-router-dom";
import * as ROUTES from "../constants/Route";
import FirebaseContext from "../context/firebase";
import Timeline from "./Timeline";

function Header() {
  const History = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const { UserDetail } = useContext(AuthListnerContext);
  const { user } = LeadingToHeader(UserDetail?.uid);
  console.log("user", user || "Fetching...");

  return (
    <>
      <div className=" mt-7 flex flex-wrap  w-full items-center justify-between px-11 ">
        <div>
          <Link to={ROUTES.Dashboard}>
            <img className=" " src={InstgramLogo} alt="" />
          </Link>
        </div>
        {UserDetail ? (
          <div className="  flex items-center space-x-4  min-w-[31%] flex-wrap ">
            <div className="flex gap-5 items-center flex-wrap">
              <Link to={`/p/${user?.username}`}>
                <img
                  className="rounded-full w-8 h-8 "
                  src={`/images/avatars${user?.username}.jpg`}
                  alt=""
                  onError={(e) => (e.target.src = DefaultImage)}
                />
              </Link>
              <Link to={`/p/${user?.username}`}>
                <h1 className="w-full ">{user?.username}</h1>
              </Link>
              <Link
                to={ROUTES.Logout}
                onClick={() => firebase.auth().signOut()}
                className="  bg-[#2563eb] px-3 py-1 rounded-full text-white "
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center min-h-[3rem] text-[19px]">
            <div className="flex gap-4 ">
              <Link
                to={ROUTES.Login}
                className=" hover:bg-blue-800 hover:text-white transition duration-500 Font-[black] bg-[#2563eb] px-4 rounded-full text-white py-2 items-center flex-row  "
              >
                Login
              </Link>
              <Link
                to={ROUTES.Signup}
                className=" hover:text-black transition duration-500 Font-[black] font-bold text-[#2563eb] px-2 rounded-full  pt-[5px]"
              >
                {" "}
                Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
