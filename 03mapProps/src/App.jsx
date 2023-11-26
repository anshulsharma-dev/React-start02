import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import FoodItems from "./Components/foodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  // let foodItems = [];

  let foodItems = [
    "Tandoori chicken",
    "Egg Whites",
    "Green Veggies",
    "Whey Protein",
    "Green Salad",
  ];

  return (
    <>
      <Heading  />
      <ErrorMessage foodItems = {foodItems}/>
      <FoodItems foodItems = {foodItems}/>
    </>
  );
}

export default App;
