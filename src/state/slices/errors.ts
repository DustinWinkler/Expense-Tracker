import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  message: null | string
}

const initialState: ErrorState = {
  message: null
}

export const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload
    }
  }
})

export const { setErrorMessage } = ErrorSlice.actions

export default ErrorSlice.reducer