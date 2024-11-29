// import React, { useContext } from "react";
// import FirebaseContext from "../context/firebase";
// import { checker } from "../services/FirebaseFunctions";
// import {EmailChecker} from "../services/FirebaseFunctions"

// function ExampleComponent() {
//   const firebase = useContext(FirebaseContext); // Get firebase instance here
//   const username = "dali"
//   const handleCheck = () => {
//     checker(username); // Pass firebase as an argument
//     EmailChecker("salvador@dali.com")

//   };

  

//   return (
//     <div>
//       <button onClick={handleCheck}>Check Username</button>
//     </div>
//   );
// }

// export default ExampleComponent;

import React from 'react';

function ExampleComponent() {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { // Check if the "Enter" key was pressed
      alert('You pressed Enter!');
    }
  };

  return (
    <input
      type="text"
      onKeyDown={handleKeyDown} // Call handleKeyDown when a key is pressed
      placeholder="Press Enter to trigger alert"
    />
  );
}

export default ExampleComponent;
