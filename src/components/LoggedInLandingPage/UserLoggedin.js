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
    <Container fluid className="fullWidthImage">
      <HeaderBody />
      <Container>
        <Row className="logged-in-container">
       
          <Col md={3}>
          <h1 className="mainHeaderFonts color_lightblue someTopPadding">Search Users</h1>
          <hr className="color_lightblue_hr" />
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

                <Card.Body>
                <Link to={`/users/${user._id}`}>
                    <div className="proPhotoLogged profileCircleShift">
                      <Card.Img
                        className="proPhotos"
                        variant="top"
                        src={user.userImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                      />
                    </div>

                    <Card.Title className="mainHeaderFonts nameSpacer">{user.username}</Card.Title>
               
                  </Link>
                  <Badge variant="info">{user.user_role}</Badge>
                  <Card.Text>
                    <p>
                    Speaks: <strong className="mainBodyFont">{user.languages[0]}
                    {user.languages[1] && `, ${user.languages[1]}`}
                    {user.languages[2] && `, ${user.languages[2]}`}
                    {user.languages[3] && `, ${user.languages[3]}`}
                    {user.languages[4] && `, ${user.languages[4]}`}
                    {user.languages[5] && `, ${user.languages[5]}`}</strong>
                    <br />
                    Nationality: <strong className="mainBodyFont">{user.nationality}</strong>
                    </p>
                    </Card.Text>
                  <Button variant="info" className="mt-auto buttonFonts" block>
                  <Link to="/messages" className="color_white">
                    Send a Message
                    </Link>
                  </Button>

                </Card.Body>

              </Card>     ))  }

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
