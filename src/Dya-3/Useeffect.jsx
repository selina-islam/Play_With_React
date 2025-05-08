import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []); // once after the first render

  // console.log(result)

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-44">
        Data fetching from jsonplaceholder
      </h2>
      <ul>
        {data.map((post, index) => (
          <li key={index}>
            {" "}
            {post.title} <p className="text-red-500 text-3xl">{post.id}</p>{" "}
            <p className="p-6">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Useeffect;
