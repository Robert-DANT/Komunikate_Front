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

const UserSettings = () => {
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
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Popover.Content>
    </Popover>
  );

  const UpdatePassword = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="password-button buttonFonts" variant="success">
        Update Password
      </Button>
    </OverlayTrigger>
  );
  return (
    <Container className="outer-container-settings" fluid>
      <Container className="content-container bg-light">
        <Row>
          <Col sm={3}>
            <img
              className="user-image"
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
              alt="Generic placeholder"
            />

            <ListGroup className="" variant="flush">
              <Button className="button-photo buttonFonts" variant="success">
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
          <Col md={9}>
            <h3 className="mainHeaderFonts">User Type</h3>
            <Form.Group id="formGridCheckbox form-check-inline">
              <h6 className="subHeadlineFonts">
                Are you looking for information or do you want to help others?
              </h6>
              <Form.Check
                // onChange={(e) => setUserRole(e.target.id)}
                // value={userRole}
                name="userType"
                type="radio"
                inline
                label="Info-Seeker"
                className="formFonts"
                id="Seeker"
                required
              />
              <Form.Check
                // onChange={(e) => setUserRole(e.target.id)}
                // value={userRole}
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
                //   onChange={(e) => setHobbies(e.target.value)}
                //   Mongodb model attribute: userBio
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
                <Form.Label className="mainHeaderFonts">Username</Form.Label>
                <Form.Control
                  //   onChange={(e) => setFirstName(e.target.value)}
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
                  //   onChange={(e) => setLastName(e.target.value)}
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
                <Form.Label className="mainHeaderFonts">First Name</Form.Label>
                <Form.Control
                  //   onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter First name"
                  className="formFonts"
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="mainHeaderFonts">Last name</Form.Label>
                <Form.Control
                  //   onChange={(e) => setLastName(e.target.value)}
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
                <Form.Label className="mainHeaderFonts">Languages</Form.Label>
                <Form.Control
                  //   onChange={(e) => setLanguages(e.target.value)}
                  type="text"
                  id="languages"
                  name="languages"
                  placeholder="Languages"
                  className="formFonts"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="mainHeaderFonts">Nationality</Form.Label>
                <Form.Control
                  //   onChange={(e) => setNationality(e.target.value)}
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
                  // onChange={(e) => setWorkingRole(e.target.id)}
                  // value={userRole}
                  name="workingRole"
                  type="radio"
                  inline
                  label="Studying"
                  id="Studying"
                  className="formFonts"
                  required
                />
                <Form.Check
                  // onChange={(e) => setWorkingRole(e.target.id)}
                  // value={userRole}
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
                  // onChange={(e) => setCityGermany(e.target.id)}
                  // value={userRole}
                  name="userCity"
                  inline
                  type="radio"
                  label="Yes, I do"
                  id="true"
                  className="formFonts"
                  required
                />
                <Form.Check
                  // onChange={(e) => setWorkingRole(e.target.id)}
                  // value={userRole}
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
                <Form.Label className="mainHeaderFonts">Moved to</Form.Label>
                <Form.Control
                  //   onChange={(e) => setLanguages(e.target.value)}
                  type="text"
                  id="moving_city"
                  name="moving_city"
                  placeholder="Enter City"
                  className="formFonts"
                />
              </Form.Group>
            </Form.Row>
            <hr />
            <Form.Group as={Col}>
              <Form.Label className="mainHeaderFonts">
                Hobbies and Interests
              </Form.Label>
              <Form.Control
                //   onChange={(e) => setHobbies(e.target.value)}
                //   Mongodb model attribute: interests
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
              variant="primary"
              type="submit"
            >
              Save Changes
            </Button>
            <Button
              className="cancel-save-button buttonFonts"
              variant="primary"
              type="submit"
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UserSettings;
