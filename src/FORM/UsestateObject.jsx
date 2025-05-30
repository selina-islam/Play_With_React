import React, { useState } from "react";

const UsestateObject = () => {
  // declare state variable 'user' as an object with name, email, password
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  // destructure user object to get individual values
  const { name, email, password } = user;

  // handle input changes dynamically based on input's name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    // update user state with new value for corresponding field
    setUser({ ...user, [name]: value });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (!name || !email || !password) {
      alert("please fill out all fields"); // simple validation alert
    }
    console.log("user", user); // print user data in console
    // reset form fields to empty strings
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            id="name"
            className="border border-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            id="email"
            className="border border-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            id="password"
            className="border border-gray-400"
          />
        </div>
        <button type="submit" className="border px-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsestateObject;
