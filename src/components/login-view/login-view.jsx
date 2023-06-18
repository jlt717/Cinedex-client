import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import { DateTime } from "luxon";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://cinedex.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          const user = {
            ...data.user,
            Birthday: DateTime.fromISO(data.user.Birthday).toFormat(
              "yyyy-MM-dd"
            ),
          };
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", data.token);
          onLoggedIn(user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body style={{ color: "#C5C6C7" }}>
                <Card.Title>Login</Card.Title>
                <form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      style={{ color: "#C5C6C7" }}
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength="3"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      style={{ color: "#C5C6C7" }}
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button
                    className="mt-4"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
