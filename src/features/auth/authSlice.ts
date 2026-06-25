import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { authState } from "./types/auth.type";

const initialAuthState: authState = {
  isAuthenticated: false,
  token: null,
  authenticUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setAuthenticUser: (
      state,
      action: PayloadAction<authState["authenticUser"]>,
    ) => {
      state.authenticUser = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.authenticUser = null;
    },
  },
});

export const { setToken, setAuthenticUser, logout } = authSlice.actions;
export default authSlice.reducer;
