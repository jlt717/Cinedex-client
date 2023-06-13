import React from "react";
import { Form, Button, Card, CardGroup, Container } from "react-bootstrap";

export const UpdateUser = ({ handleSubmit, handleUpdate }) => {
  //function updateUser({})
  const handleUpdate = (event) => {
    const updatedValue = event.target.value;
    setInputValue(updatedValue);

    return (
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Form
                  className="profile-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <h2> Want to change your info?</h2>
                  <label>Username:</label>
                  <input
                    type="text"
                    name="Username"
                    defaultValue={user.Username}
                    onChange={(e) => handleUpdate(e)}
                  />

                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    defaultValue={user.Password}
                    onChange={(e) => handleUpdate(e)}
                  />

                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.Email}
                    onChange={(e) => handleUpdate(e.target.value)}
                  />
                  <label>Birthdate</label>
                  <input
                    type="birthday"
                    name="birthday"
                    defaultValue={user.Birthday}
                    onChange={(e) => handleUpdate(e.target.value)}
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
};
