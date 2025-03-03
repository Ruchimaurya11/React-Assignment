import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });

  useEffect(() => {
    if (editingUser) setUser(editingUser);
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) updateUser(user);
    else addUser({ ...user, id: Date.now() });

    setUser({ firstName: "", lastName: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <TextField
        label="First Name"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        required
        style={{ marginRight: "10px" }}
      />
      <TextField
        label="Last Name"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        required
        style={{ marginRight: "10px" }}
      />
      <TextField
        label="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: "10px" }}>
        {editingUser ? "Update User" : "Add User"}
      </Button>
    </form>
  );
};

export default UserForm;
