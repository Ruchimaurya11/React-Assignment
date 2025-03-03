import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/users", user).then(() => navigate("/"));
  };

  return (
    <Container maxWidth="sm" style={{ padding: 20, backgroundColor: "#E1BEE7", borderRadius: 10 }}>
      <Typography variant="h5">Add User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="First Name" name="firstName" value={user.firstName} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Last Name" name="lastName" value={user.lastName} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Email" name="email" value={user.email} onChange={handleChange} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUser;
