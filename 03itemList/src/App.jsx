import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import FoodItems from "./Components/foodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container/Container";
import Paragraph from "./Components/Paragraph";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  // let foodItems = [
  //   ,
  //   "Egg Whites",
  //   "Green Veggies",
  //   "Whey Protein",
  //   "Green Salad",
  // ];

  let [foodItems, setFoodItems] = useState("");

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItems = [e.target.value, ...foodItems];
      setFoodItems(newFoodItems)
      e.target.value = ""
    }
  }

  return (
    <>
      <Heading  />

      <Container>
      <FoodInput handleOnKeyDown={handleOnKeyDown}/>
      <ErrorMessage foodItems = {foodItems}/>
      <FoodItems foodItems = {foodItems}/>
      </Container>
      
      <Container>
      <Paragraph/>
      </Container>
      
      <Paragraph/>
      
    </>
  );
}

export default App;
