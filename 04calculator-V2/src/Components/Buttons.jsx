import React from "react";
import styles from './Buttons.module.css';

function Buttons() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((button) => (
        <button className={styles.button}>{button}</button>
      ))}
    </div>
  );
}

export default Buttons;
