import React from "react";
import styles from './Item.module.css'

function Item({item  , handleBuyButton}) {

  return (
    <>
      <li className= {`${styles["item-color"]} list-group-item`}>
        {item}
        <button
        onClick={handleBuyButton}
        className={`btn btn-info ${styles.buyButton}`}>Buy</button>
      </li>
    </>
  );
}

export default Item;
