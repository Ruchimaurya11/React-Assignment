import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../redux/userSlice";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchUsers()); // ✅ Redux se Users Load Karna
  }, [dispatch]);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      dispatch(addUser({ ...newUser }));
      setNewUser({ name: "", email: "" });
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>Users List</h2>

      {/* ✅ Add New User Form */}
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>

      {/* ✅ Users Table */}
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;

