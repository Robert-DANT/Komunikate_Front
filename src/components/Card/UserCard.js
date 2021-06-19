import "./UserCard.css";
import { Card, Button, CardDeck, Container, Row, Badge } from "react-bootstrap";

const UserCard = () => {
  return (
    <Container>
      <h3>Connect with Users</h3>
      <Row className="justify-content-center">
        <CardDeck>
          <Card>
            <Card.Img
              className="card-image"
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Card.Body>
              <Card.Title>Maxine Mustermann</Card.Title>

              <Card.Text>Looking to move to Germany</Card.Text>
              <Button variant="success" className="mt-auto" block>
                Send a Message
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last seen 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="card-image"
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Card.Body>
              <Card.Title>John Donatello</Card.Title>
              <Badge variant="info">Mentor</Badge>{" "}
              <Card.Text>Moved to Germany in 2010</Card.Text>
              <Button variant="success" className="mt-auto" block>
                Send a Message
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last seen 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="card-image"
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Card.Body>
              <Card.Title>Max Mustermann</Card.Title>

              <Card.Text>Looking to move to Germany</Card.Text>
              <Button variant="success" className="mt-auto" block>
                Send a Message
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last seen 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default UserCard;
