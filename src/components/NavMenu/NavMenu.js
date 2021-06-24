import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <Nav bg="light" expand="lg" id="center" variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link to="/guide"> Guide </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <Link to="/visas"> Visas </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <Link to="/healthInsurance"> Health Insurance </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-4">
          <Link to="/applications"> Applications </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
