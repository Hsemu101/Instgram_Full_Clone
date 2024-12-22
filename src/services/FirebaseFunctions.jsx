import React, { useContext } from "react";

import { fieldValue, firebase, firestore } from "../lib/firebase";

export async function checker(Username) {
  try {
    const check = await firebase
      .firestore()
      .collection("users")
      .where("username", "==", Username.toLowerCase())
      .get();

    return check.docs.length > 0;
  } catch (error) {
    console.log(error.message);
  }
}

export async function ParamsUserFinder(ProfileName) {
  try {
    const results = await firebase
      .firestore()
      .collection("users")
      .where("username", "==", ProfileName)
      .get();
      if(!results.empty){
        return {...results.docs[0]?.data(), docId: results.docs[0]?.id}
      }
   
  } catch (error) {
    console.log("Params", error);
  }
}

export async function UpdateForPharams(TargetDoc){
  try {
    const result = await firebase.firestore().collection("users").doc(TargetDoc).get()
    return{...result.data(), docId:TargetDoc }
  } catch (error) {
    console.log("Error coming from fireabse service UpdateForPharams ", error)
  }

}




export async function EmailChecker(EmailInfo) {
  try {
    const EmailChekerResult = await firebase
      .firestore()
      .collection("users")
      .where("emailAddress", "==", EmailInfo.toLowerCase())
      .get();
    return EmailChekerResult.docs.length > 0;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetUserIdThenUSerInfo(FetchedId) {
  try {
    const Result = await firebase
      .firestore()
      .collection("users")
      .where("userId", "==", FetchedId)
      .get();
    const MappedResult = Result.docs.map((index) => ({
      ...index.data(),
      docId: index.id,
    }));
    return MappedResult;
  } catch (error) {
    console.log(error);
  }
}

export async function GetTheSuggestedUSers(userId, following) {
  try {
    let query = firebase.firestore().collection("users");
    let fetchedData;

    if (following.length > 0) {
      // This condition may need to be updated because the "not-in" operation only supports arrays with fewer than 10 items. If the user's following array exceeds 10 items, this query will stop working.

      fetchedData = query.where("userId", "not-in", [...following, userId]);
    } else {
      fetchedData = query.where("userId", "!=", userId);
    }
    let results = await fetchedData.limit(4).get();

    let FinalResults = results.docs.map((index) => ({
      ...index.data(),
      docId: index.id,
    }));

    return FinalResults;
  } catch (error) {
    console.log(error);
  }
}

export async function UpdateUsersFollowing(targetId, MyDocId, IsFollowing) {
  try {
    return await firebase
      .firestore()
      .collection("users")
      .doc(MyDocId)
      .update({
        following: IsFollowing
          ? fieldValue.arrayRemove(targetId)
          : fieldValue.arrayUnion(targetId),
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function UpdateTargetedFollowers(
  TargetDocId,
  MyUserId,
  isFollowed
) {
  try {
    return await firebase
      .firestore()
      .collection("users")
      .doc(TargetDocId)
      .update({
        followers: isFollowed
          ? fieldValue.arrayRemove(MyUserId)
          : fieldValue.arrayUnion(MyUserId),
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetPhotosDatabase(userID, following) {
  try {
    const response = await firebase
      .firestore()
      .collection("photos")
      .where("userId", "in", following)
      .get();
    const MappedResult = response.docs.map((index) => ({
      ...index.data(),
      docId: index.id,
    }));

    const EnhancedResults = await Promise.all(
      MappedResult.map(async (index) => {
        let IsLiked = false;
        if (index.likes.includes(userID)) {
          IsLiked = true;
        }
        const user = await GetUserIdThenUSerInfo(index?.userId);
        const { username } = user[0];
        return { ...index, username, IsLiked };
      })
    );
    return EnhancedResults;
  } catch (error) {
    console.log("This is the Error:", error);
  }
}

export async function LikeUpdater(docid, userid, toggleLike) {
  await firebase
    .firestore()
    .collection("photos")
    .doc(docid)
    .update({
      likes: toggleLike
        ? fieldValue.arrayRemove(userid)
        : fieldValue.arrayUnion(userid),
    }); // toggleLike is gonna be a state i am gonna use for the actions component
}

export async function PhotosRetriverProfile(userId) {
  try {
    const results = await firebase
      .firestore()
      .collection("photos")
      .where("userId", "==", userId)
      .get();

    if (results.docs.length === 0) {
      return {};
    }

    const FinalProduct = results.docs.map((index) => ({
      ...index.data(),
      docId: index.id,
    }));

    return FinalProduct;
  } catch (error) {
    console.log("Coming from Photos Retriver Profile function:", error);
  }
}

export async function CheckerIfPharamsISFollowing(LoggedInUsername, TargetUid) {
  try {
    const result = await firebase
      .firestore()
      .collection("users")
      .where("username", "==", LoggedInUsername)
      .where("following", "array-contains", TargetUid)
      .get();

    const [FinalResult = {}] = result.docs.map((index) => ({
      ...index.data(),
      DocId: index.id,
    }));
    return FinalResult.userId;
  } catch (error) {
    console.log(
      "This is an error coming from the service API in the (CheckerIfPharamsISFollowing) Firebase service",
      error
    );
  }
}

export async function FollowingAndFollowerAdderPharams(
  targetId,
  MyDocId,
  IsFollowing,
  TargetDocId,
  MyUserId,
  isFollowed
) {
  await UpdateUsersFollowing(targetId, MyDocId, IsFollowing);
  await UpdateTargetedFollowers(TargetDocId, MyUserId, isFollowed);
}
