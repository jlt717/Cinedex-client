import React from "react";
import { Form, Button, Card } from "react-bootstrap";

export const UpdateUser = ({ handleSubmit, handleUpdate }) => {
  return (
    <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
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
        Update
      </Button>
    </Form>
  );
};
