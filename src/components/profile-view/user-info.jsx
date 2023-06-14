import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";

export const UserInfo = ({ user }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <p>User: {user.Username}</p>
                <p>Email: {user.Email}</p>
                <p>Birthday: {user.Birthday}</p>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
