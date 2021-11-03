import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedCategoryState {
  category: null | string
}

const initialState: SelectedCategoryState = {
  category: null
}

export const SelectedCategorySlice = createSlice({
  name: 'SelectedCategory',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      if (state.category === action.payload) {
        state.category = null
      }
      state.category = action.payload
    }
  }
})

export const { setSelectedCategory } = SelectedCategorySlice.actions

export default SelectedCategorySlice.reducer