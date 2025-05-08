import React, { useEffect } from 'react'

function Subscriptions() {
        useEffect(() => {

                // subscriptions
                const handleResize = () => console.log(window.innerWidth);
                window.addEventListener('resize', handleResize)

                // clean up the event listener

                return ()=> window.removeEventListener('resize', handleResize)
        }, [])
  return (
    <div>Subscriptions Resize the window and the console</div>
  )
}

export default Subscriptions