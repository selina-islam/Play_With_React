import React, { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import Onclickevent from '../../../first-practice/Day-2/Event/UpdatingTheScreenBasedOnClick/Onclickevent';

const VideoUseref = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying]= useState(false)

    const handleplay=()=>{
        if(isPlaying){
            videoRef.current.pause()
        }else{
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }

 
  return (
    <div className='group w-[500px] h-auto mx-auto mt-8 '>
        <div  className='relative flex justify-center items-center'>
            <video ref={videoRef} src="tanveerevan.mp4" controls></video>
            <button onClick={handleplay} className={`absolute bg-white p-2 rounded-full cursor-pointer ${isPlaying? ' group-hover:opacity-100 transition': ''}`}>
                {isPlaying? <FaPause/>: <FaPlay/>}
            </button>
        </div>
    </div>
  )
}

export default VideoUseref