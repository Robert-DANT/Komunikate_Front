import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import "./UserSettings.css";
import "../fonts.css";
import axios from "axios";
import { useState, useEffect } from "react";

const UserSettings = ({ token }) => {
  const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [nationality, setNationality] = useState();
  const [languages, setLanguages] = useState();
  const [livingGermany, setLivingGermany] = useState();
  const [userRole, setUserRole] = useState();
  const [workingRole, setWorkingRole] = useState();
  const [bio, setBio] = useState();
  const [proPhoto, setProPhoto] = useState();
  const [hobbies, setHobbies] = useState();

  const queryString = require("query-string");

  useEffect(() => {
    fetchUserInfo();
  }, [token.id]);

  useEffect(() => {
    setEmail(userInfo.email);
    setUserName(userInfo.username);
    setFirstName(userInfo.first_name);
    setLastName(userInfo.last_name);
    setNationality(userInfo.nationality);
    setLanguages(userInfo.languages);
    setLivingGermany(userInfo.living_in_germany);
    setUserRole(userInfo.user_role);
    setWorkingRole(userInfo.working_role);
    setBio(userInfo.userBio);
    setProPhoto(userInfo.userImg);
    setHobbies(userInfo.interests)
  }, [userInfo]);

  const fetchUserInfo = async () => {
    if (token.id) {
      axios
        .get(`https://komunikate-backend.onrender.com/users/${token.id}`)
        .then((res) => setUserInfo(res.data.getUser))
        .catch((err) => console.log(err));
    }
  };

  const updateProfile = () => {
    const newUserInfo = queryString.stringify({
      username: userName,
      email: email,
      first_name: firstName,
      last_name: lastName,
      nationality: nationality,
      living_in_germany: livingGermany,
      user_role: userRole,
      languages: languages,
      working_role: workingRole,
      userBio: bio,
      userImg: proPhoto,
      interests: hobbies
    });
    updateUserInfo(newUserInfo).then((res) => {
      if (!res) {
        alert("Your information has been changed");
        /* window.location.reload(); */
      } else alert("Oops, something went wrong...");
    });
  };

  const updateUserInfo = async (data) => {
    if (token.id) {
      axios
        .put(`https://komunikate-backend.onrender.com/users/${token.id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Update Password</Popover.Title>
      <Popover.Content>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              // onChange={(e) => setPw(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              // onChange={(e) => setPw(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Update
          </Button>
        </Form>
      </Popover.Content>
    </Popover>
  );

  const UpdatePassword = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="password-button buttonFonts" variant="info">
        Update Password
      </Button>
    </OverlayTrigger>
  );
  /* List of Fields that are currently not working:
Share about yourself/ UserBio
Year to Germany
Moved to
*/
  return (
    <Container className="outer-container-settings" fluid>
      <Container className="content-container bg-light">
        <Row>
          <Col sm={3}>
            <div className="proPhotoSettings centerImage">
              <div className="centerImage">
                <img
                  /* className="user-image" */
                  src={proPhoto}
                  alt="Generic placeholder"
                />
              </div>
            </div>
            <ListGroup className="" variant="flush">
              <Button className="button-photo buttonFonts" variant="info">
                Update Photo
              </Button>{" "}
              <ListGroup.Item
                className="item-list mainBodyFont"
                action
                href="#link1"
              >
                About You
              </ListGroup.Item>
              <ListGroup.Item
                className="item-list mainBodyFont"
                action
                href="#link1"
              >
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item
                className="item-list mainBodyFont"
                action
                href="#link1"
              >
                Notifications
              </ListGroup.Item>
              <UpdatePassword />
            </ListGroup>
          </Col>

          {/* Start of Input Fields */}
          {userName ? (
            <>
              <Col md={9}>
                <h3 className="mainHeaderFonts">User Type</h3>
                <Form.Group id="formGridCheckbox form-check-inline">
                  <h6 className="subHeadlineFonts">
                    Are you looking for information or do you want to help
                    others?
                  </h6>
                  <Form.Check
                    onChange={(e) => setUserRole(e.target.id)}
                    checked={userRole === "Seeker"}
                    name="userType"
                    type="radio"
                    inline
                    label="Info-Seeker"
                    className="formFonts" 
                    id="Seeker"
                    required
                  />
                  <Form.Check
                    onChange={(e) => setUserRole(e.target.id)}
                    checked={userRole === "Mentor"}
                    name="userType"
                    type="radio"
                    inline
                    label="Info-Guide"
                    className="formFonts"
                    id="Mentor"
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group as={Col}>
                  <h3 className="mainHeaderFonts">
                    Share a little about yourself!
                  </h3>
                  {/*               <Form.Label className="mainHeaderFonts">
                Share a little about yourself!
              </Form.Label> */}
                  <Form.Control
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    type="text"
                    id="userBio"
                    name="userBio"
                    placeholder="Share a little about yourself!"
                    className="formFonts"
                    as="textarea"
                    rows="5"
                  />
                </Form.Group>
                <hr />
                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      Username
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      className="formFonts"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="mainHeaderFonts">Email</Form.Label>
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email address"
                      className="formFonts"
                      required
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      First Name
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter First name"
                      className="formFonts"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      Last name
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter Last name"
                      className="formFonts"
                      required
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      Languages
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setLanguages(e.target.value)}
                      // onChange={(e) => setLanguages(e.target.value)}
/*                       value={languages.map((e) => ` ${e}`)} */
                      value={languages}
                      type="text"
                      id="languages"
                      name="languages"
                      placeholder="What languages do you speak?"
                      className="formFonts"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      Nationality
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setNationality(e.target.value)}
                      value={nationality}
                      type="text"
                      id="nationality"
                      name="nationality"
                      placeholder="What is your nationality?"
                      className="formFonts"
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  {/*               <Form.Group md={12} lg={6} as={Col}> */}
                  <Form.Group id="formGridCheckbox form-check-inline">
                    <h6 className="subHeadlineFonts">
                      Are you a student or already working?
                    </h6>
                    <Form.Check
                      onChange={(e) => setWorkingRole(e.target.id)}
                      checked={workingRole === "Studying"}
                      name="workingRole"
                      type="radio"
                      inline
                      label="Studying"
                      id="Studying"
                      className="formFonts"
                      required
                    />
                    <Form.Check
                      onChange={(e) => setWorkingRole(e.target.id)}
                      checked={workingRole === "Working"}
                      name="workingRole"
                      type="radio"
                      inline
                      label="Working"
                      id="Working"
                      className="formFonts"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} id="formGridCheckbox form-check-inline">
                    <h6 className="subHeadlineFonts">
                      Do you live in Germany yet?
                    </h6>
                    <Form.Check
                      onChange={(e) => setLivingGermany(true)}
                      checked={livingGermany}
                      name="userCity"
                      inline
                      type="radio"
                      label="Yes, I do"
                      id="true"
                      className="formFonts"
                      required
                    />
                    <Form.Check
                      onChange={(e) => setLivingGermany(false)}
                      checked={!livingGermany}
                      name="userCity"
                      inline
                      type="radio"
                      label="No, not yet"
                      id="false"
                      className="formFonts"
                      required
                    />
                  </Form.Group>
                </Form.Row>
{/* 
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      What year did you move to Germany?
                    </Form.Label>
                    <Form.Control
                      //   onChange={(e) => setYearInGermany(e.target.value)}
                      //   Mongodb model attribute: to_germany_year
                      type="number"
                      id="to_germany_year"
                      name="to_germany_year"
                      placeholder="What year"
                      maxLength="4"
                      minLength="4"
                      min="1930"
                      max="2021"
                      className="formFonts"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="mainHeaderFonts">
                      Moved to
                    </Form.Label>
                    <Form.Control
                      //   onChange={(e) => setLanguages(e.target.value)}
                      type="text"
                      id="moving_city"
                      name="moving_city"
                      placeholder="Enter City"
                      className="formFonts"
                    />
                  </Form.Group>
                </Form.Row> */}
                <hr />
                <Form.Group as={Col}>
                  <Form.Label className="mainHeaderFonts">
                    Hobbies and Interests
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => setHobbies(e.target.value)}
                    value={hobbies}
                    type="text"
                    id="interests"
                    name="interests"
                    placeholder="i.e. Biking, Traveling, Music, Football, etc..."
                    className="formFonts"
                    as="textarea"
                    rows="3"
                  />
                </Form.Group>

                <Button
                  className="cancel-save-button buttonFonts"
                  variant="info"
                  type="submit"
                  onClick={updateProfile}
                >
                  Save Changes
                </Button>
                <Button
                  className="cancel-save-button buttonFonts"
                  variant="info"
                  type="submit"
                >
                  Cancel
                </Button>
              </Col>
            </>
          ) : (
            "loading"
          )}
          {/* End of User Input Fields */}
        </Row>
      </Container>
    </Container>
  );
};

export default UserSettings;
