import { Container, Form, Col, Button } from "react-bootstrap";
import "./UserSignup.css";

const UserSignup = () => {
  return (
    <Container>
      <h3>User Signup Page</h3>
      <Form className="signup">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="Enter First name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="password" placeholder="Enter Last name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group> */}

          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Languages</Form.Label>
            <Form.Control type="email" placeholder="First Language" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Other Languages</Form.Label>
            <Form.Control type="password" placeholder="Other languages" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Destination City (leave blank if unknown)</Form.Label>
          <Form.Control type="text" placeholder="City name" />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <h6>Type of User:</h6>
          <Form.Check type="checkbox" label="Info-Guide" />
          <Form.Check type="checkbox" label="Info-Seeker" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default UserSignup;
