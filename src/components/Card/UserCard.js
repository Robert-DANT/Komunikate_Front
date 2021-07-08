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
import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import "./UserProfile.css";
import "../fonts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'


const UserProfile = ({setUser}) => {

  let {id} = useParams();
  let history = useHistory()
  const [users, setUsers] = useState(false);

  const fetchUsers = async () => {
    await axios
    .get(`https://stark-fjord-75040.herokuapp.com/users/${id}`)
      .then((response) => setUsers(response.data.getUser))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    setUser({ id, name: users.username })
    history.push('/messages')
  }


  return (
    <Container className="outer-container-profile" fluid>
      <Container className="user-profile-container bg-light">
        <Row>
          <Col md={4}>
           { users && <Card className="profile-card">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={ users.userImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                  />
                  <Card.Body>
                    {/* Mongodb Model key name is: first_name + last_name */}
                    <Card.Title className="mainHeaderFonts">
                    {users.first_name} {users.last_name}
                    </Card.Title>
                    {/* Mongodb Model key Mentor or Seeker is: user_role */}
                    <Badge variant="info" className="buttonFonts">
                      Guide
                    </Badge>{" "}
                    {/* <p>Level 10 | 450 Points</p> */}
                    {/* Mongodb Model key City in Germany is: city_in_germany */}
                    {/* Mongodb Model key Year is: to_germany_year */}
                    {/* Conditional render the next line. If user lives in Germany display 'Moved to', 
                    if not display "Not living in Germany yet" */}
                    <Card.Text className="subHeadlineFonts">
                      Moved to Germany in 2010
                    </Card.Text>
                    <Button variant="success" className="mt-auto buttonFonts" block onClick={handleClick}>
                      Komunikate <FontAwesomeIcon icon={faComments} />
                    </Button>
                  </Card.Body>
                </Card>}
          </Col>
          <Col className="table-column" md={8}>
            <h3 className="mainHeaderFonts">{users.username}'s Profile</h3>
            {/* Mongodb Model key name for Mentor or Seeker is: user_role */}

            <hr />
            <p className="subHeadlineFonts">
              {users.userBio}
            </p>
            <hr />
            <Table size="sm">
              <tbody>
                <tr>
                  <td className="mainBodyFont">Nationality</td>
                  <td className="subHeadlineFonts">American</td>
                </tr>
                <tr>
                  <td className="mainBodyFont">Languages</td>
                  <td className="subHeadlineFonts">English, German</td>
                </tr>
                <tr>
                  <td className="mainBodyFont">Professional Status</td>
                  <td className="subHeadlineFonts">Student</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <p className="subHeadlineFonts">
              Hobbies + Interests. Hobbies + Interests. Hobbies + Interests.
              Hobbies + Interests. Hobbies + Interests. Hobbies + Interests.
              Hobbies + Interests. Hobbies + Interests. Hobbies + Interests.
              Hobbies + Interests. Hobbies + Interests. Hobbies + Interests.
            </p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UserProfile;
