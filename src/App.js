import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const formData = (enteredData) => {
    setData((value) => {
      return [
        ...value,
        {
          id: Math.random().toString(),
          fname: enteredData.fname,
          lname: enteredData.lname,
          email: enteredData.email,
          hobbies: enteredData.hobbies
        },
      ];
    });
  };
  return (
    <Container className={styles.App}>
      <Row>
        <Col>
          <AddUser userData={formData} />
        </Col>
        <Col>
          <UserList users={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
