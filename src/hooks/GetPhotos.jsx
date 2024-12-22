import React, {useEffect, useState} from 'react'
import {GetPhotosDatabase} from "../services/FirebaseFunctions"

export function PhotoFileHook(LoggedUser){


    const [PictureFiles, setPictureFiles] = useState(null)

 useEffect(()=>{

    async function RetrivingPictureFile(){
        if(!LoggedUser?.userId || !LoggedUser?.following){
            setPictureFiles(null)
            return
        }
    const MyResult = await GetPhotosDatabase(LoggedUser?.userId, LoggedUser?.following)
    
    setPictureFiles(MyResult)

    }
    RetrivingPictureFile()

 }, [LoggedUser?.userId, LoggedUser?.following])

return {PictureFiles}

}

