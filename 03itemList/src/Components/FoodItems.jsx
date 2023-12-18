import React, { useState } from "react";
import Item from "./Item";

function FoodItems({ foodItems }) {

  let [activeItems , setActiveItems] = useState([]);

  const buyButtonClicked = (item , event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
   
  }

  return (
    <>
      <ul className="list-group">
        {foodItems.length !== 0 &&
          foodItems.map((item) => (
            <Item
              key={item}
              item={item}
              bought = {activeItems.includes(item)}
              handleBuyButton = {(event) => buyButtonClicked(item, event) }
            />
          ))}
      </ul>
    </>
  );
}

export default FoodItems;
