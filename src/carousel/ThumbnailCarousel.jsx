import React, { useState } from "react";

// Importing images for the carousel
const img = ["animal.jpg", "deer.jpeg", "tech.jpeg"];
const ThumbnailCarousel = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="max-w-6xl gap-6 mx-auto p-4 flex">
      <div>
        {/* display the selected image */}
        <img
          src={img[selected]}
          alt="Selected Photo"
          className="w-5xl h-[90vh] object-cover"
        />
      </div>
      {/* thumbnail image for selection */}
      <div className="gap-2 mt-2 justify-center items-center">
        {img.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`thumbnail ${i}`}
            onClick={() => setSelected(i)}
            className={`size-16 rounded-2xl ${
              selected === i
                ? "border-3 border-blue-500 opacity-100"
                : "opacity-60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ThumbnailCarousel;
