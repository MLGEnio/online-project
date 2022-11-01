import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddUser.css";
import CreatableSelect from "react-select/creatable";
function AddUser(props) {
  let initialValues = { fname: "", lname: "", email: "", hobbies: [] };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const changeHandler = (e) => {
    if (Array.isArray(e)) {
      setFormValues({ ...formValues, hobbies: e });
    } else {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    setFormErrors(valid);
    if (
      formValues.fname !== "" &&
      formValues.lname !== "" &&
      formValues.email !== "" &&
      formValues.hobbies.length !== 0
    ) {
      props.userData(formValues);
    }
  };
  const options = [
    { value: "guitar", label: "guitar" },
    { value: "swimming", label: "swimming" },
    { value: "games", label: "games" },
    { value: "football", label: "football" },
    { value: "voleyball", label: "voleyball" },
    { value: "basketball", label: "basketball" },
    { value: "violin", label: "violin" },
  ];

  const validate = (values) => {
    const errors = {};
    const regexName = /^[a-zA-Z]*$/;
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.fname) {
      errors.fname = "First Name is required";
    } else if (!regexName.test(values.fname)) {
      errors.fname = "Not Valid First Name";
    }
    if (!values.lname) {
      errors.lname = "Last Name is required";
    } else if (!regexName.test(values.lname)) {
      errors.lname = "Not valid Last Name";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Not Valid Email";
    }
    if (values.hobbies.length === 0) {
      errors.hobbies = "Hobbies is required";
    }
    return errors;
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12">
          <Form.Label>First name</Form.Label>
          <input
            name="fname"
            className="form-control"
            value={formValues.fname}
            onChange={changeHandler}
          />
          <p>{formErrors.fname} </p>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="12">
          <Form.Label>Last name</Form.Label>
          <input
            name="lname"
            className="form-control"
            value={formValues.lname}
            onChange={changeHandler}
          />
          <p>{formErrors.lname} </p>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="12">
          <Form.Label>Email</Form.Label>
          <input
            name="email"
            className="form-control"
            value={formValues.email}
            onChange={changeHandler}
          />
          <p>{formErrors.email} </p>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="12">
          <Form.Label>Hobbies</Form.Label>
          <CreatableSelect
            isMulti
            options={options}
            onChange={changeHandler}
            name="hobbies"
          />
          <p>{formErrors.hobbies} </p>
        </Form.Group>
      </Row>
      <Row></Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default AddUser;
