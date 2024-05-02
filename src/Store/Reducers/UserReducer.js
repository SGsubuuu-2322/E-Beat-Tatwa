import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, loginUserDetailsAPI } from "../Actions/UserAction";

const initialState = {
  token: "",
  userDetails: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, { payload }) => {
      return {
        ...state,
        token: payload.token,
        userDetails: payload.userdetail,
      };
    });
    builder.addCase(loginUserAPI.rejected, (state) => {
      console.log("Its Rejected...");
      return { ...state };
    });

    builder.addCase(loginUserDetailsAPI.fulfilled, (state, { payload }) => {
      console.log("Its fulfilled............", payload);
      localStorage.setItem("token", JSON.stringify(payload.data.token));
      localStorage.setItem(
        "userDetails",
        JSON.stringify(payload.data.userdetail)
      );

      return {
        ...state,
        token: payload.data.token,
        userDetails: [payload.data.userdetail],
      };
    });

    builder.addCase(loginUserDetailsAPI.rejected, (state, { payload }) => {
      console.log("Its rejected................", payload);
      return { ...state };
    });
  },
});

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions

// export default userSlice.reducer;
