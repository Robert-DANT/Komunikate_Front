import { Card, CardColumns, Button, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Articles.css";
import React, { useState, useEffect } from "react";

const Articles = () => {
  let { topic } = useParams();

  const [articles, setArticles] = useState();

  const calcDate = (time) => {
    const event = new Date(time);
    return event.toLocaleDateString({
      hour: "numeric",
      minute: "numeric",
    });
  };

  const fetchArticles = async () => {
    await axios
      .get("http://localhost:3002/posts")
      .then((response) => setArticles(response.data.allarticles))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container className="cards-container">
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
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.body.substring(0, 120)}...</Card.Text>
                </Card.Body>
                <Card.Text>
                  <small className="text-muted">
                    post created: {calcDate(article.date)}
                  </small>
                </Card.Text>
              </Card>
            </Link>
          ))}
{/*         
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
        
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2014/11/15/23/31/alpsee-532864_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2018/06/04/18/32/koblenz-3453860_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2021/04/25/16/43/lighthouse-6207038_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2018/08/03/11/48/skyline-3581739_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2014/11/15/23/31/alpsee-532864_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2014/11/15/23/31/alpsee-532864_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2018/06/04/18/32/koblenz-3453860_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2021/04/25/16/43/lighthouse-6207038_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2018/08/03/11/48/skyline-3581739_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2014/11/15/23/31/alpsee-532864_960_720.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card> */}
      </CardColumns>
    </Container>

    // <>
    //   <h3>Articles</h3>
    //   <Card className="article">
    //     <Card.Header>Featured</Card.Header>
    //     <Card.Img
    //       className="article-img"
    //       variant="top"
    //       src="https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_960_720.jpg"
    //     />
    //     <Card.Body>
    //       <Card.Title>Moving to Germany in 2021</Card.Title>
    //       <Card.Text>
    //         With supporting text below as a natural lead-in to additional
    //         content.
    //       </Card.Text>
    //       <Button variant="primary">Continue reading...</Button>
    //     </Card.Body>
    //   </Card>
    //   <Card className="article">
    //     <Card.Header>Featured</Card.Header>
    //     <Card.Img
    //       className="article-img"
    //       variant="top"
    //       src="https://cdn.pixabay.com/photo/2014/11/15/23/31/alpsee-532864_960_720.jpg"
    //     />
    //     <Card.Body>
    //       <Card.Title>Berlin 101</Card.Title>
    //       <Card.Text>
    //         With supporting text below as a natural lead-in to additional
    //         content.
    //       </Card.Text>
    //       <Button variant="primary">Continue reading...</Button>
    //     </Card.Body>
    //   </Card>
    //   <Card className="article">
    //     <Card.Header>Featured</Card.Header>
    //     <Card.Img
    //       className="article-img"
    //       variant="top"
    //       src="https://cdn.pixabay.com/photo/2021/04/25/16/43/lighthouse-6207038_960_720.jpg"
    //     />
    //     <Card.Body>
    //       <Card.Title>Germany for beginners</Card.Title>
    //       <Card.Text>
    //         With supporting text below as a natural lead-in to additional
    //         content.
    //       </Card.Text>
    //       <Button variant="primary">Continue reading...</Button>
    //     </Card.Body>
    //   </Card>
    // </Co>
  );
};

export default Articles;
