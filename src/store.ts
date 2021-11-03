import UserReducer from "./state/slices/users"
import ExpenseReducer from "./state/slices/expenses"
import ErrorReducer from "./state/slices/errors"
import SelectedUserReducer from "./state/slices/selectedUser"
import SelectedCategoryReducer from "./state/slices/selectedCategory"

import { configureStore, compose } from "@reduxjs/toolkit"

// redux dev tools setup
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    users: UserReducer,
    expenses: ExpenseReducer,
    errorMessage: ErrorReducer,
    selectedUser: SelectedUserReducer,
    selectedCategory: SelectedCategoryReducer
  },
  devTools: composeEnhancers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch