import React from 'react'

function CurrentTime() {
  let time = new Date();
  return (
    <div className='text-center'>This is the Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
  )
}

export default CurrentTime