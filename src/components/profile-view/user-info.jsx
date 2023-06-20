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
                <Card.Body style={{ color: "#C5C6C7" }}>
                  <h2 style={{ color: "#66FCF1", paddingBottom:"10px" }}>User Info</h2>
                  <p >User: {user.Username}</p>
                  <p>Email: {user.Email}</p>
                  <p>Birthday: {user.Birthday}</p>

                  <Button
                  className="my-3"
                    variant={"light"}
                    onClick={deleteUser}
                  >
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
