import styles from "./App.module.css";
import Display from "./Components/Display.jsx";
import Buttons from "./Components/Buttons.jsx";


function App() {
  return (
    <>
    
    <div className={styles.calculator}>
      <Display />
      <Buttons />
    </div>
    
    </>
    
  );
}

export default App;
