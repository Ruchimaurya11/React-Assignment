import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const UserForm = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
