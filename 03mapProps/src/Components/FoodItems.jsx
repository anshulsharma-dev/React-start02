import React from 'react'
import Item from './Item'

function FoodItems({foodItems}) {
  return (
    <>
     
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} item = {item}/>
        ))}
      </ul>
    
    </>
  )
}

export default FoodItems