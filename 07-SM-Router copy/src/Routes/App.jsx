import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

import PostListProvider from "../Store/Post-item-store";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <PostListProvider>
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
