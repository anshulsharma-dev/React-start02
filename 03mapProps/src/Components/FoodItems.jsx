import React from 'react'
import Item from './Item'
import styles from './FoodItem.module.css'

function FoodItems({foodItems}) {
  return (
    <>
     
      <ul className={`${styles["food-items"]} list-group`}>
        {foodItems.map((item) => (
          <Item key={item} item = {item}/>
        ))}
      </ul>
    
    </>
  )
}

export default FoodItems