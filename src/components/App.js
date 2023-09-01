
import React from "react";
import './../styles/App.css';
import UserProvider from "../context/UserProvider";
import UserPage from "./UserPage";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <UserProvider>
            <UserPage/>
        </UserProvider>
       
    </div>
  )
}

export default App
