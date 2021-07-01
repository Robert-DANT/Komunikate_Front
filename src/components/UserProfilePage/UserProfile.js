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
import "../fonts.css";

const UserProfile = () => {
  return (
    <Container className="outer-container-profile" fluid>
      <Container className="user-profile-container bg-light">
        <Row>
          <Col md={4}>
            <Card className="profile-card">
              <Card.Img
                className="card-image"
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
              <Card.Body>
                {/* Mongodb Model key name is: first_name + last_name */}
                <Card.Title className="mainHeaderFonts">
                  Maxine Mustermann
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
                <Button variant="success" className="mt-auto buttonFonts" block>
                  Send a Message
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="table-column" md={8}>
            <h3 className="mainHeaderFonts">Username's Profile</h3>
            {/* Mongodb Model key name for Mentor or Seeker is: user_role */}

            <hr />
            <p className="subHeadlineFonts">
              User's Bio goes here. User's Bio goes here. User's Bio goes here.
              User's Bio goes here. User's Bio goes here. User's Bio goes here.
              User's Bio goes here. User's Bio goes here. User's Bio goes here.
              User's Bio goes here. User's Bio goes here. User's Bio goes here.
              User's Bio goes here. User's Bio goes here. User's Bio goes here.
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
            {/*
            <hr className="hr-posts" />
            <h4>Most recent posts</h4>

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
            </ListGroup> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UserProfile;
