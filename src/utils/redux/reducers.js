import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // Slice's name
  name: "user",
  // bases state
  initialState: {
    isLogIn : false,
    token: false,
    user: false,
  },
  // all actions
  reducers: {

    logIn: (state, action) => {
      state.token = action.payload
    },

    logOut: (state) => {
      if (state.isLogIn === true) {
        state.isLogIn = false;
        state.token = false;
        state.user = false;
      }
    },

    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogIn = true;
    },
    // handling app state changes
    updateUser: (state,action)=> {
      state.user.firstName = action.payload.firstName
      state.user.lastName = action.payload.lastName
    }
  },
});

export const { logIn, logOut, setUser, updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;