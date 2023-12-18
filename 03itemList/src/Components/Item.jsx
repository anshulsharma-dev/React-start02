import React from "react";
import styles from './Item.module.css'

function Item({item , bought , handleBuyButton}) {

  return (
    <>
      <li className= {`${styles["item-color"]} list-group-item ${bought&& "active" }`}>
        {item}
        <button
        onClick={handleBuyButton}
        className={`btn btn-info ${styles.buyButton}`}>Buy</button>
      </li>
    </>
  );
}

export default Item;
