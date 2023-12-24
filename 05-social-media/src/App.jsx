import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostsList from "./Components/PostsList";

function App() {
  return (
    <>
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Header />
          <CreatePost />
          <PostsList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
