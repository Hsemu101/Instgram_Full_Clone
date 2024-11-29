import React, {useContext} from 'react'
import AuthListnerContext from "../context/UserAuthContext"
import Header from "../components/Header"
import Timeline from "../components/Timeline"
import Sidebar from "../components/sidebar"


function Dashboard() {
// const {UserDetail} = useContext(AuthListnerContext)
// console.log(UserDetail)
  return (

         <div>
          <Header/>
          <Timeline/>
          <Sidebar/>
         <h1 className='text-[45px] font-bold text-center mt-[10%]'></h1>
       </div>

  )
}

export default Dashboard