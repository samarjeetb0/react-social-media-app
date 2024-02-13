import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";
import { useState } from "react";
import { PostListProvider } from "./store/post-list-store";

function App() {
  const [selectedTab, setTabName] = useState("Home");
  const handleTabChange = (newTab) => {
    setTabName(newTab);
  };

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} changeTab={handleTabChange} />

      <div className="content">
        <Header />
        <PostListProvider>
        {selectedTab === "Home" ? <CreatePost /> : <PostList />}
        </PostListProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
