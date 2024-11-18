import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config";

const getRooms = createAsyncThunk(
  "getRooms",
  async ({ limit }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: BASE_URL + `room/list/?p=true&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getRooms;
