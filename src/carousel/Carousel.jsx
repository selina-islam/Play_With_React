import React, { useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2hrpLGhP9CwQgKQGQt0PnUbqjHpSHY5bTlj1ncPPCrbof9f3lFCbspOKSErCU6XsbxM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcAoVxXDcbhgosxJ8zbjtSVj0INUp5SrSaPyR8Q5Nhrie20jHSDLNtAQ1r88CZ7Tf9Mw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRHzkpG1MzKB0CxnfqvNalJO2wQB65yGO4w&s",
  "https://samakal.com/media/imgAll/2025January/niloy-1736416172.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length); // Loop back to the first image after the last one  
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length); // Loop back to the last image if we go before the first one
  };

  return (
    <section className=" bg-gray-400">
      <div className="max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-4 p-4 md:p-0 ">
        <h2 className="text-2xl mb-4 font-semibold font-mono">
          React & Tailwind Carousel
        </h2>
        <div className="relative flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 bg-gray-100 rounded-full p-1 cursor-pointer md:text-2xl"
          >
            {" "}
            ⬅️
          </button>
          {images.map((img, index) => (
            <div
              key={index}
              className={`${index == current ? "block" : "hidden"}`}
            >
              <img
                key={index}
                src={img}
                alt="photo"
                className="h-[400px] w-[300px] lg:h-[500px] lg:w-[450px] rounded object-cover"
              />
            </div>
          ))}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 bg-gray-100 rounded-full p-1 cursor-pointer md:text-2xl"
          >
            ➡️
          </button>
        </div>
          {/* Pagination Dots */}
        <div>
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full m-1 cursor-pointer ${
                current === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
