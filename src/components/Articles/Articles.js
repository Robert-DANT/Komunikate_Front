import { Card, CardColumns, Button, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Articles.css";
import React, { useState, useEffect } from "react";
import "../fonts.css";


const Articles = () => {
  let { topic } = useParams();
  console.log(topic)
  const [articles, setArticles] = useState();

  const categories = ['guide', 'healthcare', 'lifestyle', 'visa']

  const calcDate = (time) => {
    const event = new Date(time);
    return event.toLocaleDateString({
      hour: "numeric",
      minute: "numeric",
    });
  };

  const fetchCategories = async () => {
    await axios
      .get(`https://komunikate-backend.onrender.com/posts/categories/${topic}`)
      .then((response) => setArticles(response.data.getCategoryArticle))
      .catch((error) => console.log(error));
  };

  const fetchArticles = async () => {
    await axios
      .get("https://komunikate-backend.onrender.com/posts")
      .then((response) => setArticles(response.data.allarticles))
      .catch((error) => console.log(error));
  };

  const fetchSearch = async () => {
    await axios
            .get(`https://komunikate-backend.onrender.com/posts/search`, { params: {searchtext: topic}})
            .then(res => {
                console.log(res)
                setArticles(res.data.searchedArticles)
            })
            .catch(err => {
              console.log(err)
            })
  }

  useEffect(() => {
    if (categories.includes(topic)) fetchCategories()
    else if (topic) fetchSearch()
    else fetchArticles()
  }, [topic]);

  function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container className="cards-container">
      <div>
            <Container className="our-mission-container mainBodyFont justifyText">
          <h1 className="mainHeaderFonts color_lightblue someTopPadding">{topic ? capitalizeWord(topic)  : "The Latest Articles"}</h1>
          <hr className="color_lightblue_hr" />
          <h4>

          </h4>
        </Container>

      <CardColumns>
        {articles &&
          articles.map((article) => (
            <Link to={`/articles/article/${article._id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={article.img1 || "https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_960_720.jpg"}
                />
                <Card.Body>
                  <Card.Title className="mainHeaderFonts color_darkgrey">{article.title}</Card.Title>
                  <hr className="color_lightblue_hr" />
                  <Card.Text className="subHeadlineFonts paragraphRagging color_darkgrey textLeftAlign">{article.body.substring(0, 120)}...</Card.Text>
                  <small className="text-muted quoteFonts creationDatePadding">
                    posted on {calcDate(article.date)}
                  </small>
                </Card.Body>
              </Card>
            </Link>
          ))}
      </CardColumns>
      </div>

    </Container>
  );
};

export default Articles;
