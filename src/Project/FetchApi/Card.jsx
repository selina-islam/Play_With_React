import React from 'react'

function Card({meal}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={meal?.strMealThumb}
        alt="meal image"
        className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-all duration-150 cursor-pointer"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 ">{meal.strMeal}</h2>
                          <p className='text-sm text-gray-600 mt-2'>{meal.strInstructions.slice(0, 100)}...</p>
                          <a className='block mt-4 text-blue-500 hover:underline' href="#">Learn MOre</a>
      </div>
    </div>
  );
}

export default Card