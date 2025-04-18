import React from "react";
import AdimPanel from "./components/AdimPanel";
import Login from "./components/Login";

function Condition() {
        const isLogIn = true; // boolean value
        
        const isAdmin = true;

        return <div>{isLogIn ? <AdimPanel /> : <Login />}
        {isAdmin && <div>I'm the Admin</div>}
        </div>;
}

export default Condition;









// import React from 'react'
// import AdimPanel from './components/AdimPanel';
// import Login from './components/Login';

// function Condition() {
//         const isLogIn= true // boolean value
//         let content;
//         if (isLogIn) {
//                 content= <AdimPanel/>
//         } else {
//                 content= <Login/>
//         }


//   return (
//           <div>
//                   {content}
//     </div>
//   )
// }

// export default Condition
