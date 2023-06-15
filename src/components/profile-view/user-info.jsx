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
                  <p>User: {user.Username}</p>
                  <p>Email: {user.Email}</p>
                  <p>Birthday: {user.Birthday}</p>

                  <Button variant={"danger"} onClick={deleteUser}>
                    Delete
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
