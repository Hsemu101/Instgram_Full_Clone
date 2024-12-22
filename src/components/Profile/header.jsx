import React, { useContext, useEffect, useState } from "react";
import AuthListnerContext from "../../context/UserAuthContext";
import LeadingToHeader from "../../hooks/FullUser";
import {
  CheckerIfPharamsISFollowing,
  FollowingAndFollowerAdderPharams, UpdateForPharams
} from "../../services/FirebaseFunctions";
import DefaultImages from "../../public/images/avatars/default.png";

function ProfileHeader({
  TargetProfile,
  FollowerCount,
  setFollowerCount,
  PhotoCount,
}) {
  const TargetUsername = TargetProfile.username;
  const TargretDoc = TargetProfile?.docId
  const TargetUid = TargetProfile.userId;
  const { UserDetail } = useContext(AuthListnerContext);
  const { user } = LeadingToHeader(UserDetail?.uid);
  // console.log(user);

  const [Following, setIsFollowing] = useState(null);
  const activeButton = TargetUsername
    ? TargetUsername == user?.username
    : false;
  const [TargetUserFollowerCount, setTargetUserFollowerCount] = useState(0);
  const [TargetUserFollowingCount, setTargetUserFollowingCount] = useState(0);

  async function FollowUnFollowClick() {
    const newFollowTracker = !Following;

    setIsFollowing(newFollowTracker);
    setFollowerCount({
      FollowerCount: Following ? FollowerCount - 1 : FollowerCount + 1,
    });
    await FollowingAndFollowerAdderPharams(
      TargetUid,
      user.docId,
      Following,
      TargretDoc,
      user.userId,
      Following
    );

    const RefreshedPage = await UpdateForPharams(TargretDoc);
    setTargetUserFollowerCount(RefreshedPage?.followers?.length || 0);
    setTargetUserFollowingCount(RefreshedPage?.following?.length || 0);


  }

  useEffect(() => {
    async function CheckFollowers() {
      const result = await CheckerIfPharamsISFollowing(
        user?.username,
        TargetUid
      );

      setIsFollowing(!!result);
    }

    if (user?.username && TargetUid) {
      CheckFollowers();
    }
  }, [user?.username, TargetUid]);




  useEffect(()=>{
    async function Refresher(){
      if(TargetUid){
        const RefreshedPage = await UpdateForPharams(TargretDoc)
        setTargetUserFollowerCount(RefreshedPage?.followers?.length || 0)
        setTargetUserFollowingCount(RefreshedPage?.following?.length || 0);
      }
    }
    Refresher()
  }, [TargetProfile])

  return (
    <>
      <div className=" flex-wrap gap-[2rem] lg:flex flex-row flex-wrap justify-center  mt-8 sm:justify-center flex flex-row sm:ml-5  md:justify-center md:-ml-[25rem]">
        {TargetUsername ? (
          <div>
            <img
              className="h-14 rounded-full w-14"
              src={`/images/avatars/${TargetUsername}.jpg`}
              alt=""
              onError={(e) => (e.target.src = DefaultImages)}
            />
          </div>
        ) : null}

        {TargetUsername ? (
          <>
            <div className="flex gap-8">
              <div className="font-black pt-3">{TargetUsername}</div>
              {Following == null ? (
                ""
              ) : activeButton ? (
                ""
              ) : (
                <div className="pt-3 ">
                  <button
                    onClick={FollowUnFollowClick}
                    className={`flex font-medium rounded ${
                      !Following ? "pl-[1.3rem]" : "pl-[.5rem]"
                    } hover:bg-blue-700  min-w-[5.5rem] min-h-[1.8rem]  border-green-400 bg-[#2563EB] text-white`}
                  >{`${Following ? "unfollow" : "follow"}`}</button>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>

      <div className="flex  gap-[2rem] lg:flex flex-row flex-wrap justify-center  mt-5 sm:justify-center flex flex-row sm:ml-[13rem]  md:justify-center md:-ml-[13rem]">
        <div>
          {!PhotoCount ? "0" : PhotoCount} <span>Photos</span>
        </div>
        <div>
          {TargetUserFollowerCount} <span>followers</span>
        </div>
        <div>
          {TargetUserFollowingCount} <span>following</span>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;



