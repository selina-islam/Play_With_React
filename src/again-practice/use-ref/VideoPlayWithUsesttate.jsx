import React, { useState, version } from 'react'
import { FaDoorClosed, FaPause, FaPlay } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const VideoPlay = () => {
    const  [video, setVideo]= useState(false)
    const handleVideo = () => {
        setVideo(!video)
    }
  return (
    <div>
        <div className='relative flex justify-center mt-12 items-center'>
            <img src="deer.jpeg" alt="thumbnail" className='w-[400px] h-[250px] mx-auto mt-8 rounded-lg' />
            <button onClick={handleVideo } className='text-black/60 hover:text-black rounded-full absolute bg-gray-300 p-2 cursor-pointer transition transform duration-300'>{video ? <FaPause className=''/>: <FaPlay className=''/>}</button>

           
              {video && (
                <div className='absolute  justify-center items-center p-6 shadow-lg rounded-lg border-white'>
                    <iframe className='rounded-lg' width="560" height="315" src="https://www.youtube.com/embed/XjricJ7a5UQ?si=6EfJ7qaHRk9rgJsb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                        <button onClick={handleVideo} className='absolute top-2 right-2 cursor-pointer bg-black text-white p-0.5 rounded-full'>
                        <MdClose/>
                    </button>
              
                </div>
            )}
           
        </div>
       

    </div>
  )
}

export default VideoPlay