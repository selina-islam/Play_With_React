import React, { useEffect, useState } from "react";

// fetchapi component
const FetchApi = () => {
  // establishing a state to store users, initially empty array
  const [user, setUser] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  // effect runs only once after the component mounts
  useEffect(() => {
    // executing a fetch request to the api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // evaluating the response status
        if (!res.ok) {
          throw new Error(message);
        }

        // extracting json data from the response
        return res.json();
      })
      .then((user) => {
        // establishing the fetched data into user state
        setUser(user);
              setIsloading(false);
              setError(null)
      })
      .catch((error) => {
        // error handling block
        setError(error.message);
        setIsloading(false);
      });
  }, []);

  return (
    <div>
      <h1>fetch api example</h1>
      {isLoading && <p> loading...</p>}
      {error && <p> something went wrong</p>}
      <div>
        {/* extracting user names from user array and displaying */}
        {user.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchApi;
