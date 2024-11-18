import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/login/authSlice";
import roomsReducer from "./slices/patient/roomsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomsReducer,
  },
});
