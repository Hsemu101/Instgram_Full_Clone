import React from "react"

function Footer({Captions, Name}){
    console.log(Captions)
    return(
        <div className="w-full bg-white pl-4 pb-2 flex gap-2 ">
        <div>{Name}</div>
        <div className="font-serif font-extralight">{Captions}</div>
        </div>
    )
}

export default Footer