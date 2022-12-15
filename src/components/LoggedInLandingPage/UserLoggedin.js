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
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'



const UserLoggedIn = ({ token, setUser }) => {

  const [randomUsers, setRandomUsers] = useState();
  const languagesRef = useRef()
  const citiesRef = useRef()
  const roleRef = useRef()
  const languagesArray = ISO6391.getAllNames()
  let history = useHistory()

  const handleClick = (id, name) => {
    setUser({ id: id, name: name })
    history.push('/messages')
  }


  const fetchRandomUsers = async () => {
    await axios
      .get("https://komunikate-backend.onrender.com/users/randomUsers")
      .then((response) => setRandomUsers(response.data.users))
      .catch((error) => console.log(error));
  };


  const searchedUsersGet = (queryString) => {
    axios
        .get(`https://komunikate-backend.onrender.com/users`,
            {
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

            <Button variant="secondary" block>
                Clear Search
            </Button>
            <br />
{ randomUsers &&  randomUsers.map((user) => (

<Card>

<Card.Body>
<Link to={`/users/${user._id}`}>
    <div className="proPhotoLogged profileCircleShiftFrontPage">
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
    Speaks: <strong className="mainBodyFont textLeftAlign">{user.languages[0]}
    {user.languages[1] && `, ${user.languages[1]}`}
    {user.languages[2] && `, ${user.languages[2]}`}
    {user.languages[3] && `, ${user.languages[3]}`}
    {user.languages[4] && `, ${user.languages[4]}`}
    {user.languages[5] && `, ${user.languages[5]}`}</strong>
    <br />
    Nationality: <strong className="mainBodyFont">{user.nationality}</strong>
    </p>
    </Card.Text>
    <Button variant="info" onClick={() => handleClick(user._id, user.username)} className="mt-auto buttonFonts" block>
                  Komunikate <FontAwesomeIcon icon={faComments} />
                </Button>
</Card.Body>

</Card>  )) }

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