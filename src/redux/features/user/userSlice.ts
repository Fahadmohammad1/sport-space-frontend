import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: {
    userId: string | null;
    email: string | null;
    role: string | null;
  };
}

const initialState: IUserState = {
  user: {
    userId: null,
    email: null,
    role: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.user.userId = action.payload?.user.userId;
      state.user.email = action.payload?.user.email;
      state.user.role = action.payload?.user.role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
