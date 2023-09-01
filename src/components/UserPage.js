
import React, { useContext, useState } from "react"
import UserContext from "../context/UserContext";
const UserPage = ()=>{
    let data = useContext(UserContext);
    let [st, setSt] = useState(false);
    // console.log(x);
    function handleClick(){
        if(data){
            setSt(true)
        }
    }
    return (
        <>
        <div>
         <h1>Blue Whales</h1>
        <button className="btn" onClick={handleClick}>Get User List</button>
        <table>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
          </thead>
        {
            !st && "No data found to display."
        }
          <tbody>

          {
              st && data.map((e)=>(
                  
                  <tr key={e.id}>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.email}</td>
                    <td><img src={e.avatar} alt="Image" /></td>
                </tr>
            ))
        }
        </tbody>
        </table>
        </div>
        </>
    )
}

export default UserPage;