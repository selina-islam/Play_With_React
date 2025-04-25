import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [errors, setErrors] = useState('')
        

        // check form validation
const validateForm=()=> {
        const newErrors = {};
        if(!name.trim()) newErrors.name= 'Name is required!'
        if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
          newErrors.email = "Invalid or empty email! Please correct it!";
        if (!message.trim()) newErrors.message = 'Message cannot be empty!'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
}        

        // form submit
        const handleSubmit = (e) => {
                e.preventDefault();
                if (validateForm()) {
                  alert(`Assalamu Alaikum ${name}, thanks for your submit! `);
                  setName("");
                  setEmail("");
                  setMessage("");
                }
               
        }
  return (
    <div className="max-w-md bg-gray-300 p-8 rounded mt-20 mx-auto shadow-md shadow-amber-950">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name */}
        <div>
          <label className="block font-semibold"> Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
            className="border p-2 text-gray-500 rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm italic">{errors.name}</p>
          )}
        </div>
        {/* email */}
        <div>
          {" "}
          <label className="block font-semibold"> Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your email..."
            className="border p-2 text-gray-500 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm italic">{errors.email}</p>
          )}
        </div>
        {/* message */}
        <div>
          <label className="block font-semibold"> Message:</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            id="message"
            placeholder="Enter your message..."
            rows="6"
            className="border p-2 text-gray-500 rounded w-full"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm italic">{errors.message}</p>
          )}
        </div>

        <button className="bg-indigo-500 px-6 py-2 rounded text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
