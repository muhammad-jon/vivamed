import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config";

const login = createAsyncThunk(
  "login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL + "base/login/", {
        username,
        password,
      });
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default login;
