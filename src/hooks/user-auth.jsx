import React, {useEffect, useContext, useState} from 'react';
import FirebaseContext  from '../context/firebase'

function UserAuth(){

const {firebase} = useContext(FirebaseContext)    
const[LoggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('UserInfo')))

useEffect(()=>{

const listner = firebase.auth().onAuthStateChanged((authuser)=>{
    if(authuser){
        localStorage.setItem('UserInfo', JSON.stringify(authuser))
        setLoggedUser(authuser)
    }else{
        localStorage.removeItem('UserInfo')
        setLoggedUser(null)
    }

})

return () => listner()

}, [firebase])


return LoggedUser



}

export default UserAuth