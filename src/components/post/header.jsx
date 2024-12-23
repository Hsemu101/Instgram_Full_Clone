import React from "react";
import { Link } from "react-router-dom";

function Header({ Name }) {
  return (
    <>
      <div className="mt-2 bg-white justify-start flex w-full py-4">
        <div className="bg-white pl-4 text-lg flex gap-3">
          <Link to={`p/${Name}`}>
            {" "}
            <img
              className="rounded-full w-8 h-8"
              src={`${import.meta.env.BASE_URL}/images/avatars/${Name}.jpg`}
            />
          </Link>
          <Link to={`p/${Name}`}>{Name}</Link>
          <h1></h1>
        </div>
      </div>
    </>
  );
}

export default Header;
