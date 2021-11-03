import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../typescript/interfaces";

interface SelectedUserState {
  user: null | UserInterface
}

const initialState: SelectedUserState = {
  user: null
}

export const SelectedUserSlice = createSlice({
  name: 'SelectedUser',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<UserInterface | null>) => {
      if (state.user?.id === action.payload?.id) {
        state.user = null
      } else {
        state.user = action.payload
      }
    }
  }
})

export const { setSelectedUser } = SelectedUserSlice.actions

export default SelectedUserSlice.reducer