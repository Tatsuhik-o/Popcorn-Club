import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MovieArea from "./Components/MovieArea/MovieArea";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  const [categories, setCategories] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [expand, setExpand] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    fetch("./data3.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories({
          0: data,
          1: data.filter((movie) => movie.title.titleType.id === "movie"),
          2: data.filter((movie) => movie.title.titleType.id !== "movie"),
          3: [],
        });
      });
  }, []);
  return (
    <div className="app">
      <Header setExpand={setExpand} setSearchFilter={setSearchFilter} />
      <div className="mainWrapper">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          expand={expand}
        />
        <MovieArea
          currentActive={categories[activeTab]}
          expand={expand}
          searchFilter={searchFilter}
        />
      </div>
    </div>
  );
}

export default App;
