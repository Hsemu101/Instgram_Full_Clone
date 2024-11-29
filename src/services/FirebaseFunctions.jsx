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
    let results = await fetchedData.limit(10).get();

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
  
  try{
    return await firebase
    .firestore()
    .collection("users")
    .doc(MyDocId)
    .update({
      following: IsFollowing
        ? fieldValue.arrayRemove(targetId)
        : fieldValue.arrayUnion(targetId),
    });
  }catch(error){
    console.log(error)
    throw error
  }
 
}

export async function UpdateTargetedFollowers(
  TargetDocId,
  MyUserId,
  isFollowed
) {

  try{
    return await firebase
    .firestore()
    .collection("users")
    .doc(TargetDocId)
    .update({
      followers: isFollowed
        ? fieldValue.arrayRemove(MyUserId)
        : fieldValue.arrayUnion(MyUserId),
    });
  }catch(error){
    console.log(error)
    throw error
  }
  
}
