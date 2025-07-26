import React, { useState } from "react";

const FormControl = () => {
  // state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // handle name input
  const handleName = (e) => {
    setName(e.target.value);
  };

  // handle email input
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // handle password input
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if all fields are filled
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // log submitted data to console
    console.log(name, email, password);

    // show success message
    setMessage("Form submitted successfully!");

    // clear input fields
    setName("");
    setEmail("");
    setPassword("");

    // remove message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <div className="mb-4">
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleName}
          type="text"
          id="name"
          value={name}
          placeholder="name..."
          className="border border-gray-400 ml-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleEmail}
          type="email"
          id="email"
          value={email}
          placeholder="email..."
          className="border border-gray-400 ml-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password">Password:</label>
        <input
          onChange={handlePassword}
          type="password"
          id="password"
          value={password}
          placeholder="password..."
          className="border border-gray-400 ml-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 px-5 py-2 rounded text-white text-xl"
      >
        Submit
      </button>

      {/* show success message if exists */}
      {message && (
        <p className="text-green-500 mt-4 text-center font-semibold">
          {message}
        </p>
      )}
    </form>
  );
};

export default FormControl;
