import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`, user).then(() => navigate("/"));
  };

  return (
    <Container maxWidth="sm" style={{ padding: 20, backgroundColor: "#E1BEE7", borderRadius: 10 }}>
      <Typography variant="h5">Edit User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="First Name" name="firstName" value={user.firstName} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Last Name" name="lastName" value={user.lastName} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Email" name="email" value={user.email} onChange={handleChange} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update User
        </Button>
      </form>
    </Container>
  );
};

export default EditUser;
