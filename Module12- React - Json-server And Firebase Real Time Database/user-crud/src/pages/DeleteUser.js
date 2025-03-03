import React from "react";
import { Button, Typography, Container } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => navigate("/"));
  };

  return (
    <Container maxWidth="sm" style={{ padding: 20, backgroundColor: "#E1BEE7", borderRadius: 10 }}>
      <Typography variant="h5">Are you sure you want to delete this user?</Typography>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete
      </Button>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Cancel
      </Button>
    </Container>
  );
};

export default DeleteUser;
