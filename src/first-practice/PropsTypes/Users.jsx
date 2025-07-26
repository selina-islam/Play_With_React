import React, { useState } from "react";
import User from "./User";


// propstypes - check data types of props

const Users = () => {
//   const [name, setName] = useState();
        //   const [id, setId] = useState();
        const [user, setUser] = useState({
                id: 133223,
                name: 'Selina Islam'
        })
        
  return (
    <>
                  {/* <User name={name} id={id} /> */}
                  <User user={ user} />
    </>
  );
};



export default Users;
