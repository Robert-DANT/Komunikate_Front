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
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./UserCard.css";
import "../fonts.css";

const UserProfile = () => {

  let {id} = useParams();

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


  return (
    <Container className="outer-container-profile" fluid>
      <Container className="user-profile-container bg-light">
        <Row>
          <Col md={4}>
           { users && <Card className="profile-card">
             
                <Card.Body>
                <div class="card-body align-items-center justify-content-center">
                  <div className="proPhotoSettings">
                    <Card.Img
                      className="card-image"
                      variant="top"
                      src={users.userImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                    />
                  </div>
                  {/* Mongodb Model key name is: first_name + last_name */}
                  <Card.Title className="mainHeaderFonts">
                    {users.first_name} {users.last_name}
                  </Card.Title>
                  {/* Mongodb Model key Mentor or Seeker is: user_role */}
                  <Badge variant="info" className="buttonFonts">
                  {users.user_role}
                  </Badge>{" "}
                  {/* <p>Level 10 | 450 Points</p> */}
                  {/* Mongodb Model key City in Germany is: city_in_germany */}
                  {/* Mongodb Model key Year is: to_germany_year */}
                  {/* Conditional render the next line. If user lives in Germany display 'Moved to', 
                      if not display "Not living in Germany yet" */}
                  <Card.Text className="subHeadlineFonts">
                    { users.living_in_germany ? "Currently Living in Germany" : "Planning on Moving to Germany"}
                  </Card.Text>
                  <Button variant="success" className="mt-auto buttonFonts" block>
                    Send a Message
                  </Button>
                  </div>
                </Card.Body>

              </Card>
              
                }
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
                  <td className="mainBodyFont">Nationality:</td>
                  <td className="subHeadlineFonts">American</td>
                </tr>
                <tr>
                  <td className="mainBodyFont">Languages:</td>
                  <td className="subHeadlineFonts">English, German</td>
                </tr>
                <tr>
                  <td className="mainBodyFont">Professional Status:</td>
                  <td className="subHeadlineFonts">Student</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <p className="subHeadlineFonts">
              {users.interests}
            </p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UserProfile;
