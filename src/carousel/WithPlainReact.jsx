import React, { useState } from 'react'
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi'

// Importing images for the carousel
const img=[
'animal.jpg',
'deer.jpeg',
'tech.jpeg'
]

const WithPlainReact = () => {

    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0)

    // Function to go to the previous image
    const gotoPrevious = () => {
        const isFirstSlide = currentIndex === 0 // Check if it's the first image
        // If it's the first image, go to the last image, otherwise go to the previous image
        const newIndex = isFirstSlide ? img.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    // Function to go to the next image
    const gotoNext = () => {
        const isLastSlide = currentIndex === img.length - 1; // Check if it's the last image
        // If it's the last image, go back to the first image, otherwise go to the next image
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
  return (
    <section className='py-12 bg-blue-500 h-screen'>
        <div className='flex justify-center items-center p-4 max-w-xl mx-auto'>
            {/* previous button */}
        <button onClick={gotoPrevious} className='bg-gray-300 rounded-full cursor-pointer'>
            <BiCaretLeft className='size-8'/>
        </button>
        {/* display image */}
        <img
            src={img[currentIndex]}
            alt="carousel-image"
            className='w-80 h-99 rounded-lg shadow-md shadow-slate-500 mx-4'
        />
        {/*  Next button */}
        <button onClick={gotoNext} className='bg-gray-300 rounded-full cursor-pointer'>
            <BiCaretRight className='size-8'/>
        </button>
        </div>

    </section>
  )
}

export default WithPlainReact