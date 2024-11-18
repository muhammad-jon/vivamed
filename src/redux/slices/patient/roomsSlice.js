import { createSlice } from "@reduxjs/toolkit";
import getRooms from "./roomThunk";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default roomsSlice.reducer;
