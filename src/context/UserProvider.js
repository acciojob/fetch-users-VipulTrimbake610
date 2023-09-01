

import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserProvider = ({children})=>{
    let [userData, setUserData] = useState([]);
    useEffect(()=>{
        axios.get('https://reqres.in/api/users')
        .then((data)=>setUserData(data.data.data))
    },[])
    return (
        <>
            <UserContext.Provider value={userData}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider;