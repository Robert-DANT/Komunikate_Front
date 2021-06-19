import { Card, Button } from "react-bootstrap";
import "./Articles.css";

const Articles = () => {
  return (
    <>
      <h3>Articles</h3>
      <Card className="article">
        <Card.Header>Featured</Card.Header>
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
