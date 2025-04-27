import React from 'react'

function Fahrenheit({ fahrenheit, onTemperatureChange }) {
  return (
    <div className="mb-4 ">
      <label className="block font-semibold"> Fahrenheit:</label>
      <input
        value={fahrenheit}
        onChange={(e)=>onTemperatureChange(e.target.value)}
        type="number"
        name="fahrenheit"
        id="fahrenheit"
        placeholder="32° F"
        className="border p-2 w-full rounded text-gray-500"
      />
    </div>
  );
}

export default Fahrenheit