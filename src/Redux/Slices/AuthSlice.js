import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: localStorage.getItem('role') || '',
  data: localStorage.getItem('data') || {},
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducers yahan add karega
  },
});

export default authSlice.reducer;
