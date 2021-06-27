import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Badge,
  ListGroup,
} from "react-bootstrap";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <Container className="user-profile-container">
      <h3>UserProfile</h3>
      <Row>
        <Col md={4}>
          <Card className="profile-card">
            <Card.Img
              className="card-image"
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Card.Body>
              <Card.Title>Maxine Mustermann</Card.Title>
              <Badge variant="info">Guide</Badge> <p>Level 10 | 450 Points</p>
              <Card.Text>Moved to Germany in 2010</Card.Text>
              <Button variant="success" className="mt-auto" block>
                Send a Message
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="table-column" md={8}>
          <Table striped hover size="sm">
            <tbody>
              <tr>
                <td>From</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Wants to move</td>
                <td>Berlin</td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>English, German</td>
              </tr>
              <tr>
                <td>Hobbies</td>
                <td>Playing Piano, Travelling</td>
              </tr>
            </tbody>
          </Table>
          <hr className="hr-posts" />
          <h4>Most resent posts</h4>

          <ListGroup variant="flush">
            <ListGroup.Item action href="#link1">
              Moving to Germany in 2021
              <br />
              <small className="text-muted">Last comment on ...</small>
            </ListGroup.Item>
            <ListGroup.Item action href="#link1">
              Berlin 101
              <br />
              <small className="text-muted">Last comment on ...</small>
            </ListGroup.Item>
            <ListGroup.Item action href="#link1">
              Germany for beginners
              <br />
              <small className="text-muted">Last comment on ...</small>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
