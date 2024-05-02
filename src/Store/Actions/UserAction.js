import { baseURL } from "@/Utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUserAPI = createAsyncThunk("loginuser", async (data) => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, data);
    // console.log(response);
    return response.data.data;
  } catch (err) {
    throw new Error("Username || password error...");
  }
});
export const loginUserDetailsAPI = createAsyncThunk(
  "loginuserdetails",
  async (data) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };

      const response = await axios.post(
        `${baseURL}/auth/login-details`,
        data.data,
        config
      );

      return response.data;
    } catch (err) {
      throw new Error("An error occurred");
    }
  }
);
