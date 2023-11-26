import React from "react";

function Item({item}) {
  return (
    <>
      <li className="list-group-item">
        {item}
      </li>
    </>
  );
}

export default Item;
