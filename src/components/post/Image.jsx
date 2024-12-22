import React, { useContext, useState, useEffect } from "react";

function Picture({ src, ClickLikeTrigger }) {
  return (
    <div className="bg-white justify-center flex">
      {" "}
      
      <img
        onDoubleClick={ClickLikeTrigger}
        className="w-[505px]"
        src={src}
        alt=""
      />
    </div>
  );
}

export default Picture;
