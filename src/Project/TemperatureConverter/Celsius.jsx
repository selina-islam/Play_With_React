import React from 'react'

function Celsius({ onTemperatureChange, celsius}) {
  return (
    <div className="mb-4 ">
      <label className="block font-semibold"> Celsius:</label>
      <input
        value={celsius}
        onChange={(e)=>onTemperatureChange(e.target.value)}
        type="number"
        name="celsius"
        id="celsius"
        placeholder="0° C"
        className="border p-2 w-full rounded text-gray-500"
      />
    </div>
  );
}

export default Celsius