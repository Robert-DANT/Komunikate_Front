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
      <Button className="password-button" variant="success">
        Update Password
      </Button>
    </OverlayTrigger>
  );
  return (
    <Container className="outer-container" fluid>
      <Container className="user-settings-container">
        <Row>
          <Col sm={3}>
            <ListGroup className="" variant="flush">
              <ListGroup.Item className="item-list" action href="#link1">
                About You
              </ListGroup.Item>
              <ListGroup.Item className="item-list" action href="#link1">
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item className="item-list" action href="#link1">
                Notifications
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            <Row>
              <Col sm={4}>
                <img
                  className="user-image"
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                  alt="Generic placeholder"
                />
                <Button className="button-photo" variant="success">
                  Update Photo
                </Button>{" "}
              </Col>
              <Col sm={8}>
                <h3>User Type</h3>
                <Form.Group id="formGridCheckbox form-check-inline">
                  <h6>
                    Are you looking for information or do you want to help
                    others?
                  </h6>
                  <Form.Check
                    // onChange={(e) => setUserRole(e.target.id)}
                    // value={userRole}
                    name="userType"
                    type="radio"
                    inline
                    label="Info-Seeker"
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
                    id="Mentor"
                    required
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setLastName(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email address"
                      required
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter First name"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter Last name"
                      required
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label>Languages</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setLanguages(e.target.value)}
                      type="text"
                      id="languages"
                      name="languages"
                      placeholder="First Language"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setNationality(e.target.value)}
                      type="text"
                      id="nationality"
                      name="nationality"
                      placeholder="What country do you come from?"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group md={12} lg={6} as={Col}>
                    <Form.Label>Moved to</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setLanguages(e.target.value)}
                      type="text"
                      id="moving_city"
                      name="moving_city"
                      placeholder="Enter City"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Moved to</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setLanguages(e.target.value)}
                      type="text"
                      id="moving_city"
                      name="moving_city"
                      placeholder="Enter City"
                    />
                  </Form.Group>
                </Form.Row>
                <UpdatePassword />
                <Button
                  className="cancel-save-button"
                  variant="primary"
                  type="submit"
                >
                  Cancel
                </Button>
                <Button
                  className="cancel-save-button"
                  variant="primary"
                  type="submit"
                >
                  Save Changes
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UserSettings;
