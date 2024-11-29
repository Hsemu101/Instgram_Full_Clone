import React, { useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import { useNavigate, Link } from "react-router-dom";

import * as ROUTES from "../constants/Route";
import { checker, EmailChecker } from "../services/FirebaseFunctions";
import LOGO from "../public/images/logo.png";
import Android from "../public/images/Google_playstore_icon.png";
import Microsoft from "../public/images/Microsoft_store_icon.png";

function Signup() {
  const [username, SetUsername] = useState("");
  const [fullname, SetFullName] = useState("");
  const [password, SetPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [funcError, setFuncError] = useState("")
  const [empty, SetEmpty] = useState("")
  const History = useNavigate();
  
  const {firestore, auth, FieldValue} = useContext(FirebaseContext);

  const HandlingSignup = async (event) => {
    event.preventDefault();
    const UsernameCheck = await checker(username);
    const EmailCheck = await EmailChecker(email);
    SetEmpty("")
    setFuncError("")
    setError("")

    if((UsernameCheck === undefined || UsernameCheck === null || UsernameCheck === "" || EmailCheck === undefined || EmailCheck === null || EmailCheck === "" || !password || fullname === undefined || fullname === null || fullname == "")) {
      SetEmpty("Please enter all required fields") 
      return;}
     
      else if (!UsernameCheck && !EmailCheck) {
      try {
        
        const SignUp = await auth.createUserWithEmailAndPassword(email, password);
        console.log("signup", SignUp);
        History(ROUTES.Login);
        await SignUp.user.updateProfile({
          displayName: username
        })

        await firestore.collection('users').add({
          emailAddress: SignUp.user.email,
          followers : [],
          following: [],
          fullName: fullname,
          userId: SignUp.user.uid,
          username : username.toLowerCase()
         
        })

      } catch (error) {
        SetUsername("");
        SetPassword("");
        setError(error.message);
      }
    } else{
      setFuncError("User name or email already exisits")
    }
  };

  return (
    <>
   
      <div
        className={`border border-solid border-gray-300 w-[350px] 
         
        ml-[40%] mt-[2%] ${empty || funcError || error? 'h-[585px]'  : 'h-[550px]' }`}
      >
        <div className="ml-[21%] mt-[5%]">
        <div className="text-red-500">
      {error &&<p> Something wrong happened </p>}
      {funcError && <p>{funcError}</p>}
      {empty && <p>{empty}</p>}
    </div>
           <Link to={ROUTES.Dashboard}><img className="pt-4" src={LOGO} alt="" /></Link>
        </div>
        <div className="text-center mt-[15px] text-[#64748b]">
          <h3>Sign up to see photos and videos <br/> from your friends.</h3>
        </div>
        <form
          className="flex flex-col  mt-1  items-center"
          onSubmit={HandlingSignup}
          method="POST" //  Form method
        >
          <input
            className="w-[62%] border border-solid border-gray-300 mt-5 h-9 placeholder-ml pl-2"
            aria-label="Email"
            placeholder="Email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            value={email} // Email form
          />
          <input
            className="border border-solid border-gray-300 w-[62%] mt-2 placeholder-ml h-9 pl-2"
            aria-label="password"
            placeholder="Password"
            type="password"
            onChange={(event) => SetPassword(event.target.value)}
            value={password}
          />
          <input
           className="border border-solid border-gray-300 w-[62%] mt-2 placeholder-ml h-9 pl-2"
            aria-label="Full Name"
            placeholder="Full Name"
            type="text"
            onChange={(Name) => SetFullName(Name.target.value)}
            value={fullname}
          />
          <input className="border border-solid border-gray-300 w-[62%] mt-2 placeholder-ml h-9 pl-2"
          aria-label="Username"
          placeholder="Username"
          type="text"
          onChange={(username)=> SetUsername(username.target.value)}
          value={username}
          />
             <div className=" text-[#64748b] mt-5 text-xs">
            <p>People who use our service may have uploaded <br/> your contact information to Instagram. <span><a className="text-[#2563eb]" href="">Learn <br/><span className="ml-[144px]">More</span></a></span></p>
            <p className="pt-4">By signing up, you agree to our <span><a className="text-[#2563eb]" href=""> Terms, Privacy</a></span> <br/> <span className="ml-[74px]"><a className="text-[#2563eb]" href="">Policy and Cookies Policy.</a></span></p>
          </div>
          <button
            type="submit"
          
            className={`mt-4 mb-3 border border-solid w-[75%] bg-[#35aaf8]  text-white rounded-full py-[7px]`}
          >
            Sign up
          </button>
       
        </form>
        <div className={`border border-solid border-gray-300 w-[350px] h-[80px] ml-[0%] ${error || funcError || empty ? 'mt-[40px]' : 'mt-[30px]'} flex`}>
        <p className="ml-[64px] pt-[25px]">Have an account? <span><Link to={ROUTES.Login} className="text-[#29C1FB] pt-[25px] ml-1 ">Log in</Link></span> </p>  {/* text here */}
        
    </div>
      </div>
      <div className="ml-[840px]  mt-[108px] custom-lapotp:ml-[800px]  custom-large:ml-[900px]">
        Get the app.
      </div>
      <div className="flex sm:ml-[100px] custom-lapotp:ml-[714px] custom-lapotp:pb-[75px] mt-[18px] custom-large:ml-[830px]">
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          <img className="w-[120px]" src={Android} alt="" />
        </a>
        <a href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-us&gl=US">
          <img className="w-[102px] ml-3" src={Microsoft} alt="" />
        </a>
      </div>
    </>
  );
}

export default Signup;
