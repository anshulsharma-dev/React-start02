import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import CounterValue from "./components/CounterValue";
import Container from "./components/Container";
import Buttons from "./components/Buttons";
import { useSelector } from "react-redux";
import Private from "./components/Private";

function App() {
  const privacy = useSelector(store => store.privacy)

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <Private/> : <CounterValue />}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Buttons/>
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App;
