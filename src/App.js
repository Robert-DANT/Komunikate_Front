import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ArticleTemp from "./components/ArticlePage/ArticleTemp";

const App = () => {
  //   const [posts, setPosts] = useState();
  //   // const [city, setCity] = useState(data.city);

  //   console.log(posts);
  //   // console.log(city);

  //   const fetchData = async () => {
  //     await axios
  //       .get(`https://jsonplaceholder.typicode.com/posts`)
  //       .then((res) => setPosts(res.data.data))
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <>
      <ArticleTemp />
    </>
  );
};

export default App;
