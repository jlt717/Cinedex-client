import React from "react";
import { useState } from "react";
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export const UpdateUser = ({ handleSubmit, onHandleChange, user }) => {
  const [data, setData] = useState(user);
  //function updateUser({})
  const onChange = (event) => {
    onHandleChange((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
                <h2> Want to change your info?</h2>
                <label>Username:</label>
                <input
                  type="text"
                  name="Username"
                  defaultValue={user.Username}
                  onChange={onChange}
                />

                <label>Password</label>
                <input type="password" name="password" onChange={onChange} />

                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={user.Email}
                  onChange={onChange}
                />
                <label>Birthdate</label>
                <input
                  type="date"
                  name="birthday"
                  value={user.Birthday}
                  onChange={onChange}
                />
                <Button variant="primary" type="submit">
                  Edit
                </Button>
              </Form>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
