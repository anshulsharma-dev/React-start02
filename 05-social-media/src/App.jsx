import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostsList from "./Components/PostsList";
import { useState } from "react";

function App() {
  const [selectedTab , setSelectedTab] = useState("Home");
  return (
    <>
      <div className="main-container">
        <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostsList /> : <CreatePost />}      
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
