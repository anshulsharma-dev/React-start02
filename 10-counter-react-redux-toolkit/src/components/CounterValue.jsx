import React from 'react'
import { useSelector } from 'react-redux'

function CounterValue() {

  const counterObj= useSelector(store => store.counter);
  const counterVal = counterObj.counterVal;
  return (
    <p className="lead mb-4 fw-bold ">
    Counter current Value : {counterVal} 
  </p>
  )
}

export default CounterValue