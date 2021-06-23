import { Card, Button } from "react-bootstrap";
import "./Articles.css";

const Articles = () => {
  return (
    <>
      <h3>Articles</h3>
      <Card className="article">
        <Card.Header>Featured</Card.Header>
        <Card.Img
          className="article-img"
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_960_720.jpg"
        />
        <Card.Body>
          <Card.Title>Moving to Germany in 2021</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Continue reading...</Button>
        </Card.Body>
      </Card>
      <Card className="article">
        <Card.Header>Featured</Card.Header>
        <Card.Img
          className="article-img"
          variant="top"
          src="https://cdn.pixabay.com/photo/2014/11/15/23/31/alpsee-532864_960_720.jpg"
        />
        <Card.Body>
          <Card.Title>Berlin 101</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Continue reading...</Button>
        </Card.Body>
      </Card>
      <Card className="article">
        <Card.Header>Featured</Card.Header>
        <Card.Img
          className="article-img"
          variant="top"
          src="https://cdn.pixabay.com/photo/2021/04/25/16/43/lighthouse-6207038_960_720.jpg"
        />
        <Card.Body>
          <Card.Title>Germany for beginners</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Continue reading...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Articles;
