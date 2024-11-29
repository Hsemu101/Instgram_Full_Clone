
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton"
import { GetUserIdThenUSerInfo } from "../services/FirebaseFunctions";

function LeadingToHeader(FetchedId) {
  const [ActiveUser, setActiveUser] = useState(null);

  useEffect(() => {
    if (!FetchedId) {
      setActiveUser(null);
      return;
    } 
      async function fetchUserInfo() {
        try {
          const [PassedUserInfo] = await GetUserIdThenUSerInfo(FetchedId);
          setActiveUser(PassedUserInfo || {});
        } catch (error) {
          console.error("Error fetching user info:", error);
          setActiveUser(null);
        }
      }
      
      fetchUserInfo()
    
  }, [FetchedId]);

  return { user: ActiveUser };
}

export default LeadingToHeader;
