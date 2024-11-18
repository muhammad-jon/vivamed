import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config";

const getMe = createAsyncThunk(
  "getMe",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios({
        url: BASE_URL + "base/me/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getMe;
