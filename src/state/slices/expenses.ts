import { createSlice } from "@reduxjs/toolkit"
import { Categories, ExpenseInterface } from "../../typescript/interfaces"

const initialState: ExpenseInterface[] = [
  {
    user: {
      firstName: "Jersey",
      lastName: "Mike",
      id: "Mike1234",
      budget: 10000
    },
    category: Categories["Food"],
    cost: 1000,
    description: "Delicious sandwich party",
    holderID: "Mike1234",
    id: "Food1235"
  },
  {
    user: {
      firstName: "Dustin",
      lastName: "Winkler",
      id: "Dustin1234",
      budget: 1000
    },
    category: Categories["Travel"],
    cost: 12,
    description: "Trip to Amsterdam",
    holderID: "Dustin1234",
    id: "Food1234"
  }
]


export const ExpensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, { payload }) => {
      state.push(payload)
    },
    updateExpense: (state, { payload }) => {
      console.log('payload', payload);
      
      let newState = state.filter(expense => {
        return expense.id !== payload.id
      })
      console.log(newState);
      
      newState.push(payload)
      return newState
    },
    deleteExpense: (state, { payload }) => {
      let newState = state.filter(expense => {
        console.log(expense.id !== payload.id);
        
        return expense.id !== payload.id
      })
      return newState
    }
  }
})

export const { addExpense, updateExpense, deleteExpense } = ExpensesSlice.actions

export default ExpensesSlice.reducer