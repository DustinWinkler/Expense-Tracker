import { createSlice } from "@reduxjs/toolkit"
import { UserInterface } from "../../typescript/interfaces"

const initialState: UserInterface[] = [
  {
    firstName: "Jersey",
    lastName: "Mike",
    id: "Mike1234",
    budget: 10000
  },
  {
    firstName: "Dustin",
    lastName: "Winkler",
    id: "Dustin1234",
    budget: 1000
  }
]

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.push(payload)
    },
    updateUser: (state, { payload }) => {
      let newState = state.filter(user => {
        return user.id !== payload.id
      })
      newState.push(payload)
      return newState
    },
    deleteUser: (state, { payload }) => {
      const newState = state.filter(user => {
        return user.id !== payload.id
      })
      return newState
    }
  }
})

export const { addUser, updateUser, deleteUser } = UsersSlice.actions

export default UsersSlice.reducer