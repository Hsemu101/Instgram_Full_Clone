import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FirebaseContext from "./context/firebase.jsx";
import { firebase, fieldValue, auth, firestore, } from "./lib/firebase.jsx";
import './styles/app.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
 
    <FirebaseContext.Provider value={{ firebase, fieldValue, auth, firestore, }}>
      <App />
    </FirebaseContext.Provider>
  
);




{/* <StrictMode>
</StrictMode> */}