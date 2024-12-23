import React from "react"

function Footer({Captions, Name}){
    console.log(Captions)
    return(
        <div className="lg:w-full bg-white lg:pl-4 pb-2 flex lg:gap-2 sm:pl-4 sm:gap-2 ">
        <div>{Name}</div>
        <div className="font-serif font-extralight">{Captions}</div>
        </div>
    )
}

export default Footer