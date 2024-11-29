import React, {useContext} from 'react'
import  LeadingToHeader from '../hooks/FullUser'
import AuthListnerContext  from '../context/UserAuthContext'
import {GetTheSuggestedUSers} from "../services/FirebaseFunctions"
import InstgramLogo from '../public/images/logo.png'
import HenokImage from "../public/images/avatars/Henok.jpg" 
import DefaultImage from "../public/images/avatars/default.png"
import { useNavigate, Link } from "react-router-dom";
import * as ROUTES from "../constants/Route"
import FirebaseContext from '../context/firebase'



function Header() {
  const History = useNavigate()
  const {firebase} = useContext(FirebaseContext)
  const {UserDetail} = useContext(AuthListnerContext)
  const {user} = LeadingToHeader(UserDetail?.uid)
  console.log('user', user || 'Fetching...')
  
 
//  async function ThisISAChecker(){
//   try{
//     let myChecker = await GetTheSuggestedUSers(userId, following)
//   console.log(myChecker)
//   }catch(error){
//     console.log(error)
//   }
  
//  }

//  ThisISAChecker()
  
  
  return (
  


    <div className=" mt-7 flex   w-full items-center justify-between px-8 ">
    <div>
    <Link><img className= " "src={InstgramLogo} alt="" /></Link>
    </div>
    {UserDetail ? (<div className="  flex items-center space-x-4  min-w-[31%] flex-wrap ">
      <div className='flex gap-5 items-center flex-wrap'>
        <Link to={`/p/${user?.username}`}><img className='rounded-full w-8 h-8 'src={HenokImage} alt="" /></Link>
        <Link to={`/p/${user?.username}`}><h1 className='w-full '>{user?.username}</h1></Link>
        <Link to={ROUTES.Logout} onClick={() => firebase.auth().signOut()} className='  bg-[#2563eb] px-3 py-1 rounded-full text-white '>Logout</Link>
      </div>
     
        
      
    </div>): (
      <div className="flex space-x-1">
      <Link to={ROUTES.Login} className=' Font-[black] mr-2 bg-[#2563eb] px-2 rounded-full text-white pt-[5px] '>Login</Link>
      <Link to={ROUTES.Signup} className=' Font-[black] text-[#2563eb] px-2 rounded-full  pt-[5px] ml-2'> Signup</Link>
      </div>
    )}
    </div>

  
     

  

      
    
  )
}

export default Header

