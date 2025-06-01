import React from "react";
import useFetch from "./useFetch";

// this component fetches data from an api using the useFetch hook
const DataFetch = () => {
  // call the useFetch hook and get data, loading status, and error
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      {/* show loading message while data is being fetched */}
      {loading && <p>loading</p>}

      {/* show error message if there is any */}
      {error && <p>{error}</p>}

      {/* show fetched data when available */}
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default DataFetch;
