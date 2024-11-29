import { useEffect, useState, useContext } from "react";
import { GetTheSuggestedUSers } from "../../services/FirebaseFunctions";
import SuggestedProfile from "./SuggestedProfile";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetcher } from "react-router-dom";

function Suggestion({ userid, following, docid }) {
  const [TargetList, setTargetList] = useState(null); 

  useEffect(()=>{
    if (!userid){
      setTargetList(null)
    }

  }, [userid])

  useEffect(() => {
    async function MyTargetedList() {
      let fetchedResult;
      if (userid) {
        fetchedResult = await GetTheSuggestedUSers(userid, following);
        setTargetList(fetchedResult);
      }
    }

    MyTargetedList();
  }, [userid]);

  return !userid ? null : !TargetList ? (
    <div className="flex justify-end mt-9 pr-[28vh]">
      <div className="min-w-[25%] ">
      <Skeleton count={1} height={190} />
      </div>
    </div>
  ) : (
    <>
      <div className="flex flex-col items-end mt-[2vh] flex-wrap ">
        <div className="flex justify-start mx-7 min-w-[30%]">
          {TargetList.length == 0 ? null : (
            <h1 className="font-medium">Suggestions for you</h1>
          )}
        </div>
      </div>

      <div className="  flex justify-end mt-5 flex-wrap">
        <div className="  min-w-[30%] flex flex-col gap-4 mx-7 flex-wrap ">
          {TargetList.map((item) => (
            <SuggestedProfile
              key={item.docId}
              TargetDocId={item.docId}
              TargetUsername={item.username}
              following={item.following}
              targetId={item.userId}
              MyUserId={userid}
              MyDocId={docid}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Suggestion;
