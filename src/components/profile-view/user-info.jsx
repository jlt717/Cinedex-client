import React from "react";
import { Container, Row, Col, CardGroup, Card, Button } from "react-bootstrap";

export const UserInfo = ({ user, deleteUser }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <h2>User Info</h2>
                  <p>User: {user.Username}</p>
                  <p>Email: {user.Email}</p>
                  <p>Birthday: {user.Birthday}</p>

                  <Button variant={"danger"} onClick={deleteUser}>
                    Delete User Account
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
