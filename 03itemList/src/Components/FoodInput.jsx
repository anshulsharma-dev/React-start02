import React from 'react'
import styles from './FoodInput.module.css'

function FoodInput({handleOnKeyDown}) {

  return (
    <input
   className={styles.foodInput}
    type="text"
    placeholder='Enter your items here...'
    onKeyDown={handleOnKeyDown} />
    
  )
}

export default FoodInput