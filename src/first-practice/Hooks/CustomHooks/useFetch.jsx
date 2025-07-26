import React, { useEffect, useState } from "react";

// this custom hook fetches data from a given url
const useFetch = (url) => {
  // state to store fetched data
  const [data, setData] = useState([]);

  // state to track loading status
  const [loading, setLoading] = useState(true);

  // state to track error if any
  const [error, setError] = useState(null);

  // useEffect runs when the url changes
  useEffect(() => {
    // if url is not provided, do nothing
    if (!url) return;

    // start fetching data
    fetch(url)
      .then((response) => {
        // check if response is not ok
        if (!response.ok) throw new Error("something went wrong");
        // convert response to json
        return response.json();
      })
      .then((data) => {
        // set the fetched data and stop loading
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        // if there is an error, set the error message and stop loading
        setError(error.message);
        setLoading(false);
      });
  }, [url]); // dependency array to run the effect when url changes

  // return the states so other components can use them
  return { data, loading, error };
};

export default useFetch;
