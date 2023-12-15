import React from "react";
import styles from './Item.module.css'

function Item({item}) {

  const handleBuyButton = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(`${item} being bought`)
  }

  return (
    <>
      <li className= {`${styles["item-color"]} list-group-item`}>
        {item}
        <button
        onClick={(event) => handleBuyButton(event)}
        className={`btn btn-info ${styles.buyButton}`}>Buy</button>
      </li>
    </>
  );
}

export default Item;
