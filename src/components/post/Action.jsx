import React, { useEffect, useState } from "react";
import { LikeUpdater } from "../../services/FirebaseFunctions";
import AuthListnerContext from "../../context/UserAuthContext";
import FirebaseContext from "../../context/firebase";
import LikeContext from "../../context/LikeContext";
import { Link } from "react-router-dom";

function ActionIcons({
  DocID,
  likes,
  Isliked,
  ClickLikeTrigger,
  SetToggler,
  handleRef,
}) {
  useEffect(() => {
    SetToggler(Isliked);
  }, [Isliked]);

  return (
    <>
      <div className="flex w-full bg-white px-2">
        <div className="flex  items-center py-[1rem]  gap-2 ">
          <div className={`bg-re`}>
            <svg
              onClick={ClickLikeTrigger}
              xmlns="http://www.w3.org/2000/svg"
              fill={`${Isliked ? "#FF3040" : "none"}`}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 transition-all duration-500 ease-in-out "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <Link>
            <div>
              <svg
                onClick={handleRef}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white">
        <p className="lg:pl-4 lg:mb-1 sm:pl-4 max-639:pl-4">
          {likes === 1 ? `${likes} like` : likes === 0 ? "" : `${likes} likes`}
        </p>
      </div>
    </>
  );
}

export default ActionIcons;
