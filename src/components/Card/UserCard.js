import { Container, Row, Col, Card, Button, Table, Badge, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios';
import "./UserCard.css";
import "../fonts.css";

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
      <Container className="user-profile-container boxDropShadow bg-light">
      {users ? (
        <Row>
          <Col md={4}>
           { users && <Card className="profile-card">
             
                <Card.Body>
                <div class="card-body align-items-center justify-content-center">
                  <div className="proPhotoSettings profileCircleShift">
                    <Card.Img
                      className="card-image"
                      variant="top"
                      src={users.userImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                    />
                  </div>
                  {/* Mongodb Model key name is: first_name + last_name */}
                  <Card.Title className="mainHeaderFonts nameSpacer">
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
                  <Button variant="info" className="mt-auto buttonFonts" block onClick={handleClick}>
                      Komunikate! <FontAwesomeIcon icon={faComments} />
                  </Button>

                  </div>
                </Card.Body>

              </Card>
              
                }
          </Col>

          <Col className="table-column allAboutShift" md={8}>
            <h3 className="mainHeaderFonts">All About {users.username}</h3>
            {/* Mongodb Model key name for Mentor or Seeker is: user_role */}

            <hr />
            <p className="subHeadlineFonts">
              {users.userBio ? users.userBio : `Hi, my name is ${users.first_name} and I've always
              wanted to move to Germany ever since I visited Berlin for the first time 5 years ago. 
              I celebrated New Year's eve at a party in Charlottenburg and at the stroke of midnight 
              the party moved to the rooftop where you can see a panorama of the city being lit up 
              by all of the fireworks. It was right then there that I knew I wanted to move to Germany! 
              `}
            </p>
            <hr />
            <Table size="sm">
              <tbody>
                <tr>
                  <td className="mainBodyFont">Nationality:</td>
                  <td className="subHeadlineFonts">{users.nationality}</td>
                </tr>
                <tr>
                  <td className="mainBodyFont">Languages:</td>
                  <td className="subHeadlineFonts">
                  {users.languages[0]} {users.languages[1] && `, ${users.languages[1]}`}
                    {users.languages[2] && `, ${users.languages[2]}`}
                    {users.languages[3] && `, ${users.languages[3]}`}
                    {users.languages[4] && `, ${users.languages[4]}`}
                    {users.languages[5] && `, ${users.languages[5]}`}

                    </td>
                </tr>
                <tr>
                  <td className="mainBodyFont">Professional Status:</td>
                  <td className="subHeadlineFonts">Student</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <p className="subHeadlineFonts">
            {users.interests ? users.interests : `Hiking, Traveling, Food, Learning new things, Photography`}
            </p>

          </Col> 
        </Row> )
         : "Loading..." }
      </Container>
    </Container>
  );
};

export default UserProfile;
