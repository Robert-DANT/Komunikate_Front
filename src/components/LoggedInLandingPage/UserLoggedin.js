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
import UserCard from "../Card/UserCard";
import HeaderBody from "../HeaderSection/HeaderBody";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserLoggedIn = () => {

  const [users, setUsers] = useState();


  const fetchUsers = async () => {
    await axios
      .get("https://stark-fjord-75040.herokuapp.com/users")
      .then((response) => setUsers(response.data.users))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);


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
{ users &&  users.map((user) => (

            
            <Card>
              <Card.Img
                className="card-image"
                variant="top"
                src={user.userImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
              />
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Badge variant="info">{user.user_role}</Badge>{" "}
                <Card.Text>Speaks: {user.languages}</Card.Text>
                <Card.Text>Nationality: {user.nationality}</Card.Text>
                <Link to={`/users/${user._id}`}>
                <Button variant="success" className="mt-auto" block>
                  User Profile
                </Button>
                </Link>
                <Button variant="success" className="mt-auto" block>
                  Send a Message
                </Button>
              </Card.Body>
{/*               <Card.Footer>
                <small className="text-muted">Last seen 3 mins ago</small>
              </Card.Footer> */}
            </Card> )) }

          </Col>
          <Col className="table-column" md={9}>
            <Articles />
{/*             <UserCard /> */}
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
};

export default UserLoggedIn;
