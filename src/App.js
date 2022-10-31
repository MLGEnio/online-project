import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <AddUser />
        </Col>
        <Col>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
