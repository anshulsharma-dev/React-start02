import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import FoodItems from "./Components/foodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container/Container";
import Paragraph from "./Components/Paragraph";

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

      <Container>
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
