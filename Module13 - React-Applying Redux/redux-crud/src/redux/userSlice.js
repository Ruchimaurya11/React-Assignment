import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Users Fetch Karna (GET)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
});

// ✅ User Add Karna (POST)
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await axios.post("http://localhost:5000/users", user);
  return response.data;
});

// ✅ User Delete Karna (DELETE)
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`http://localhost:5000/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], status: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = "loading"; })
      .addCase(fetchUsers.fulfilled, (state, action) => { 
        state.users = action.payload; 
        state.status = "success"; 
      })
      .addCase(fetchUsers.rejected, (state) => { state.status = "failed"; })
      .addCase(addUser.fulfilled, (state, action) => { state.users.push(action.payload); })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
