import React from 'react'

function ErrorMessage({foodItems}) {
  return (
    <>
    {foodItems.length === 0 && (
      <h3 className="opacity-55 text-danger px-4 text-center">I am Hungry and in need of a healthy diet as soon as possible.</h3>
    )}
    </>
    
  )
}

export default ErrorMessage