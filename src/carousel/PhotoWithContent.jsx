import React, { useState } from 'react'
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from 'react-icons/bi';

const slides = [
  {
    image: "deer.jpeg",
    title: "Slide 1",
    description: "This is the first slide. Amazing view and lovely caption.",
    buttonText: "Learn More",
  },
  {
    image: "animal.jpg",
    title: "Slide 2",
    description: "The second slide has a beautiful landscape image.",
    buttonText: "Discover",
  },
  {
    image: "tech.jpeg",
    title: "Slide 3",
    description: "This is the third slide. A calm and peaceful nature shot.",
    buttonText: "Explore",
  },
];

const PhotoWithContent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev)=> (prev === 0 ? slides.length-1 : prev - 1))
    }

    const nextSlide = ()=>{
        setCurrentSlide ((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const {image, title, description, buttonText} = slides[currentSlide]
  return (
    <section className='flex justify-center items-center gap-4 mt-12'>
         <button onClick={prevSlide} className='text-3xl cursor-pointer'> <BiSolidChevronLeftCircle /></button>
        <div className='bg-gray-200 p-4 rounded-b-md text-center'>
            <img src={image} alt={title} className='h-[400px] w-[380px] rounded'/>
            <h2 className='text-2xl font-medium pt-2'>{title}</h2>
            <p className='text-gray-500 py-1'>{description}</p>
            <button className='bg-fuchsia-500  px-6 py-1 rounded cursor-pointer'>{buttonText}</button>
           
            
        </div>
        <button onClick={nextSlide} className='text-3xl cursor-pointer'><BiSolidChevronRightCircle /></button>
    </section>
  )
}

export default PhotoWithContent