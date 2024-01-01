import React, { useEffect, useState } from 'react'

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect (() => {
   const intervalId = setInterval(() => {
    console.log('Interval started')
    setTime(new Date())
   },1000)

  return () => {
   clearInterval(intervalId);
   console.log("Interval cleared")
  }
  }, []);

  return (
    <div className='text-center'>This is the Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
  )
}

export default CurrentTime