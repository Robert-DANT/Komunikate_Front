import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import "./UserLogin.css";

const UserLogin = () => {
  return (
    <Container>
      <h3>User Login Page</h3>

      <Row className="justify-content-center">
        <Col xs={6}>
          <Breadcrumb className="form-nav">
            <Breadcrumb.Item href="#">Login</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              SignUp
            </Breadcrumb.Item>
          </Breadcrumb>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="font-weight-light">
              <p>Not a member? Sign Up</p>
              <p>Forgot Password?</p>
            </div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
