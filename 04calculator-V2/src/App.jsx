import styles from "./App.module.css";
import Display from "./Components/Display.jsx";
import Buttons from "./Components/Buttons.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    }
    else if (buttonText === "="){
      let evaluation = eval(calVal)
      setCalVal(evaluation)
    }
    else {
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue) ;
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <Buttons buttonClicked={onButtonClick} />
      </div>
    </>
  );
}

export default App;
