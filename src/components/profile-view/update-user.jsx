import React from "react";
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
  const onChange = (event) => {
    console.log("called", event.target.value);
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
              <Card.Body>
                <Form className="profile-form" onSubmit={handleSubmit}>
                  <h2> Want to change your info?</h2>
                  <div className="mb-3">
                    <label>Username:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Username"
                      defaultValue={user.Username}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={user.Email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Birthday</label>
                    <input
                      className="form-control"
                      type="date"
                      name="Birthday"
                      value={user.Birthday}
                      onChange={onChange}
                    />
                  </div>
                  <Button variant="primary" type="submit">
                    Edit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
