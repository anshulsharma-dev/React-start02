import React from "react";
import styles from './Item.module.css'

function Item({item}) {
  return (
    <>
      <li className= {`${styles["item-color"]} list-group-item`}>
        {item}
      </li>
    </>
  );
}

export default Item;
