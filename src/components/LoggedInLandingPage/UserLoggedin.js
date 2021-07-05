import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import "./UserLoggedin.css";
import Articles from "../Articles/Articles";
import HeaderBody from "../HeaderSection/HeaderBody";

const UserLoggedIn = () => {
  return (
/*     <Container className="outer-container-user-home" fluid> */
    <Container fluid className="fullWidthImage">
      <HeaderBody />
      <Container>
        <Row className="logged-in-container">
          <Col md={3}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>By Language</Form.Label>
              <Form.Control as="select">
                <option>English</option>
                <option>German</option>
                <option>Spanish</option>
                <option>Arabic</option>
                <option>Turkish</option>
              </Form.Control>
              <Form.Label>By City</Form.Label>
              <Form.Control as="select">
                <option>Berlin</option>
                <option>Frankfurt am Main</option>
                <option>Hamburg</option>
                <option>Stuttgart</option>
                <option>Munich</option>
              </Form.Control>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form.Group>
            <Card>
              <Card.Img
                className="card-image"
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
              <Card.Body>
                <Card.Title>Maxine Mustermann</Card.Title>
                <Badge variant="info">Mentor</Badge>{" "}
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
          </Col>
          <Col className="table-column" md={9}>
            <Articles />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UserLoggedIn;
