import React, { useEffect, useState } from "react";
import Card from "./Card";

function DataFetch() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // www.themealdb.com/api/json/v1/1/search.php?s=

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
       setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 px-4">
      <div className="text-center bg-blue-600 py-6  text-white">
        <h1 className="text-2xl font-bold">
          My First Fetching from the Meal DB API
        </h1>
      </div>
      <div className="container mx-auto py-8">
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && (
          <p className="text-center text-red-500">Something went wrong</p>
                          )}
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                  {meal.map((meal, index) => (
                                          <Card key={index} meal={ meal} />
                                  ))}
                          </div>
      </div>
    </section>
  );
}

export default DataFetch;
