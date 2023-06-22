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
                <Form
                  className="profile-form"
                  style={{ color: "#C5C6C7" }}
                  onSubmit={handleSubmit}
                >
                  <h2 style={{ color: "#66FCF1", paddingBottom:"10px" }}>
                    {" "}
                    Want to change your info?
                  </h2>
                  <div className="mb-3">
                    <label>Username:</label>
                    <input
                      className="form-control"
                      style={{ color: "#C5C6C7" }}
                      type="text"
                      name="Username"
                      defaultValue={user.Username}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      className="form-control"
                      style={{ color: "#C5C6C7" }}
                      type="password"
                      name="password"
                      value={user.Password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      className="form-control"
                      style={{ color: "#C5C6C7" }}
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
                      style={{ color: "#C5C6C7" }}
                      type="date"
                      name="Birthday"
                      value={user.Birthday}
                      onChange={onChange}
                    />
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                      onHandleChange(user);
                      alert("User has been updated");
                    }}
                  >
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
