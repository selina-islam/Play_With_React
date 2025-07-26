import React, { useEffect, useState } from 'react';

const TimeApp = () => {
        const [count, setCount] = useState(0)
        const [isRunning, setIsrunning]=useState(false)

        useEffect(
                () => {
                        let timer;
                        if (isRunning) {
                                timer = setInterval(() => {
                                        setCount((pre)=> pre+1)
                                },1000)
                        }
                                        return ()=> clearInterval(timer)

                },
                [isRunning]
        )


        // run the timer
        const handleStart=()=> setIsrunning(true)

        // stop the timer
        const handleStop=()=> setIsrunning(false)

        // reset the timer
        const handleReset=()=> {
                setCount(0);
                setIsrunning(false)
        }
        return (
          <div className="p-5 mt-12 flex items-center justify-center">
            <p className="font-bold">Timer: {count}s</p>
            <div>
              <button
                onClick={handleStart}
                className="px-4 py-2 border rounded m-4 bg-blue-400 text-white hover:bg-blue-600 transition-all duration-150"
                px-4
                py-2
                rounded
                border
              >
                Start
              </button>
              <button
                onClick={handleStop}
                className="px-4 py-2 border rounded m-4 bg-blue-400 text-white hover:bg-blue-600 transition-all duration-150"
                px-4
                py-2
                rounded
                border
              >
                Stop
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 border rounded m-4 bg-blue-400 text-white hover:bg-blue-600 transition-all duration-150"
                px-4
                py-2
                rounded
                border
              >
                Reset
              </button>
            </div>
          </div>
        );
};

export default TimeApp;