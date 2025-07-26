import React from "react";
import PropTypes from "prop-types";

function User(props) {
        console.log(props.user)
  return (
          <div>
                  
                  <h1>Welcome</h1>
                  <h3>{props.user.id}</h3>
                  <h4>{ props.user.name}</h4>
                  
      {/* <h1>{props.name}</h1>
      <h1>{props.id}</h1> */}
    </div>
  );
}

User.propTypes = {
        user: PropTypes.shape({
                id: PropTypes.number,
                name:PropTypes.string,
      })
}

// rafcp keyboard command is use for react propstype management environment setup 

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number,
// };

// User.defaultProps = {
//   name: "Saiful Islam",
//   id: 0,
// };

export default User;
