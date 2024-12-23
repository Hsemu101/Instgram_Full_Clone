import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
  UpdateUsersFollowing,
  UpdateTargetedFollowers,
} from "../../services/FirebaseFunctions";

import DefaultImages from "../../public/images/avatars/default.png";
import TryImage from "../../public/images/avatars/raphael.jpg";

function SuggestedProfile({
  TargetDocId,
  TargetUsername,
  targetId,
  MyUserId,
  MyDocId,
  index,
}) {
  const [ClickChecker, setClickChecker] = useState(false);

  async function HandleSubmit() {
    setClickChecker(true);
    await UpdateUsersFollowing(targetId, MyDocId, false);
    await UpdateTargetedFollowers(TargetDocId, MyUserId, false);

  }
  return !ClickChecker ? (
    <>
      <div className=" flex flex-wrap gap-1 justify-between ">
        {/* Left side of the container */}
        <div className="flex gap-3 flex-wrap items-center ">
         <Link to={`/p/${TargetUsername}`}><img className={"h-[34px] rounded-full w-8 h-8"} src={`${import.meta.env.BASE_URL}images/avatars/${TargetUsername}.jpg`} alt="" onError={(e)=> e.target.src = DefaultImages} /></Link> 
          <Link to={`/p/${TargetUsername}`}><h1 className="">{TargetUsername}</h1></Link>
        </div>

        {/* right side of the container */}
        <div className=" flex flex-wrap items-center   min-w-[67%]">
          <button
            type="button"
            onClick={HandleSubmit}
            className="text-[#3072ff] font-bold hover:text-[#0b006a] transition duration-200"
          >
            Follow
          </button>
        </div>
      </div>
    </>
  ) :  null;
}

export default SuggestedProfile;

