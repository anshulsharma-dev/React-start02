import React from "react";
import Item from "./Item";

function FoodItems({ foodItems }) {
  return (
    <>
      <ul className="list-group">
        {foodItems.length!== 0 && foodItems.map((item) => (
          <Item
            key={item}
            item={item}
            handleBuyButton={() => console.log(`${item} being bought`)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
