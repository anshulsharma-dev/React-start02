import React from 'react'
import { useSelector } from 'react-redux'

function CounterValue() {

  const counter = useSelector(store => store.counter);

  return (
    <p className="lead mb-4 fw-bold ">
    Counter current Value : {counter} 
  </p>
  )
}

export default CounterValue