import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/Route";
import LOGO from "../public/images/logo.png";
import Facebook from "../public/images/Facebook_icon.jpg"
import Android from "../public/images/Google_playstore_icon.png"
import Microsoft from "../public/images/Microsoft_store_icon.png"

function Login() {
  const History = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [EmailAddress, SetEmailAddress] = useState("");
  const [Password, SetPassword] = useState("");
  const [Error, SetError] = useState("");
  const Invalid = EmailAddress.length < 5 || Password.length < 5;

  useEffect(() => {
    document.title = "Login-Instgram";
  }, []);

  const MyFormHandler = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(EmailAddress, Password);
      History(ROUTES.Dashboard);
    } catch (error) {
      SetEmailAddress("");
      SetPassword("");
      SetError("Invalid username or password");
    }
  };
    
     
  return (
    <>
    <section className="flex flex-col justify-center h-screen"> 
      <div className="flex justify-center">
        <div
          className={
            `border border-solid border-gray-300 w-2/3 md:w-1/2 lg:w-1/3 ${Error ? 'h-[450px]' : 'h-[410px]'} `
          }
        >
          <div className="text-center mt-5 text-red-500">
                <h1>{Error}</h1>
            </div>
          <div className=" flex justify-center mt-[8%]">
            <Link to={ROUTES.Dashboard}><img src={LOGO} alt="#" /></Link>
          </div>
          <form
            className="flex flex-col  mt-1  items-center"
            onSubmit={MyFormHandler}
            method="POST"
          >
            <input
              className="w-[75%] border border-solid border-gray-300 mt-7 h-9 placeholder-ml pl-2"
              aria-label="Email address"
              placeholder="email"
              type="text"
              onChange={(execute) => SetEmailAddress(execute.target.value)}
              value={EmailAddress}
            />
            <input
              className="border border-solid border-gray-300 w-[75%] mt-2 placeholder-ml h-9 pl-2"
              aria-label="Password"
              placeholder="Password"
              type="password"
              onChange={(pass) => SetPassword(pass.target.value)}
              value={Password}
            />
            <button
            disabled={Invalid}
              type="submit"
              className={`mt-4 border border-solid w-[75%]  text-white rounded-full py-[7px] ${Invalid ? 'bg-[#65b4ef]' : 'bg-[#35aaf8]'}`}
            >
              Login
            </button>
          </form>
          <div className="flex items-center mt-5 w-full  ">
            <hr className="w-[27%] mr-5 ml-[16%] border-[#DBDBDB]" />
            <p className="text-[#555555]">OR</p>
            <hr className="w-[27%] ml-5 border-[#DBDBDB]" />
          </div>
          <div className="flex justify-center mt-7 gap-2">
            <img className="w-[24px]" src={ Facebook } alt="" />
            <p className="text-[#385185] font-bold">Log in with facebook</p>
          </div>
          <div className="my-2">
            <p className="text-[#385185] text-center ">forgot password?</p>
          </div>
        </div>
      </div>
      <div className="border border-solid border-gray-300 mx-auto mt-[10px] flex p-5 justify-center gap-2 w-2/3 md:w-1/2 lg:w-1/3 ">
          <p className="">Don't have an account?</p>
          <Link to={ROUTES.Signup} className="text-[#29C1FB] ">Sign up</Link>
      </div>

      <div className="">
              
          <div className=" mt-4 text-center">
                Get the app.
              </div>
            
              
              <div className="flex mt-[18px] justify-center">
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android"><img className="w-[120px]" src={Android} alt=""/></a>
              <a href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-us&gl=US"><img className="w-[102px] ml-3" src={Microsoft} alt="" /></a> 
              </div>
      </div>
    </section>
    </>
  );
}

export default Login;
