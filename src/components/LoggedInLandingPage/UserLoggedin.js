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
import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import ISO6391 from 'iso-639-1'
import { Link } from 'react-router-dom';

const UserLoggedIn = ({ token }) => {

  const [randomUsers, setRandomUsers] = useState();
  const languagesRef = useRef()
  const citiesRef = useRef()
  const roleRef = useRef()
  const languagesArray = ISO6391.getAllNames()


  const fetchRandomUsers = async () => {
    await axios
      .get("https://stark-fjord-75040.herokuapp.com/users/randomUsers")
      .then((response) => setRandomUsers(response.data.users))
      .catch((error) => console.log(error));
  };


  const searchedUsersGet = (queryString) => {
    axios
        .get(`https://stark-fjord-75040.herokuapp.com/users`,
            {
                // headers: {
                //     'auth-token': token,
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // },
                params: queryString
            }
        )
        .then(res => {
            let users = res.data.users.map(({ username, languages, city_in_germany, user_role }) => ({ username, languages, city_in_germany, user_role }))
            setRandomUsers(users)
        })
        .catch(err => {
            console.log(err)
        })
  }

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    const newQueryString = {languages: languagesRef.current.value, city_in_germany: citiesRef.current.value, user_role: roleRef.current.value}

    searchedUsersGet(newQueryString)
  }


  return (
/*     <Container className="outer-container-user-home" fluid> */
    <Container fluid className="fullWidthImage">
      <HeaderBody />
      <Container>
        <Row className="logged-in-container">
          <Col md={3}>
          <Form onSubmit={handleSubmit}>
            <Form.Group >
              <Form.Label>By Language</Form.Label>
              <Form.Control 
                as="select"
                ref={languagesRef}
                >
                    <option></option>
                    {languagesArray.map(el => <option>{el}</option>)}
              </Form.Control>
              <Form.Label>By City</Form.Label>
              <Form.Control as="select" ref={citiesRef}>
                <option value=''></option>
                <option>Berlin</option>
                <option>Frankfurt am Main</option>
                <option>Hamburg</option>
                <option>Stuttgart</option>
                <option>Munich</option>
              </Form.Control>
              <Form.Label>By Role</Form.Label>
              <Form.Control as="select" ref={roleRef}>
                  <option value=''></option>
                  <option value='Mentor'>Mentor</option>
                  <option value='Seeker'>Seeker</option>
              </Form.Control>
              <Button variant="secondary" type="submit" block>
                Submit
              </Button>
            </Form.Group>
            </Form>
            <div>
            <Button variant="secondary" block>
                Clear Search
            </Button>
            </div>
{ randomUsers &&  randomUsers.map((user) => (

            
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
