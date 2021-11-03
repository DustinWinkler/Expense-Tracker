import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense } from '../../state/slices/expenses'
import { RootState } from '../../store'
import { ExpenseInterface } from '../../typescript/interfaces'
import './ExpensesTable.css'

interface ExpensesTableProps {
  handleEditMode: Function
}

const ExpensesTable: FC<ExpensesTableProps> = ({ handleEditMode }) => {
  const dispatch = useDispatch()
  const expenses = useSelector((state: RootState) => state.expenses)
  const selectedUser = useSelector((state: RootState) => state.selectedUser)
  const selectedCategory = useSelector((state: RootState) => state.selectedCategory)

  const [filteredExpenses, setFilteredExpenses] = useState<ExpenseInterface[]>([])
  const [expenseElements, setExpenseElements] = useState<JSX.Element[]>([])

  // useeffect to create table elements then iterate over them in return section
  useEffect(() => {
    // if selectedUser, filter by their id
    // if selectedCategory, filter by that
    // update state

    let newExpenses = expenses
    
    if (selectedUser.user) {
      newExpenses = newExpenses.filter(expense => {
        return (expense.holderID === selectedUser.user?.id)
      })
    }

    if (selectedCategory.category) {
      newExpenses = newExpenses.filter(expense => {
        return (expense.category === selectedCategory.category)
      })
    }

    setFilteredExpenses(newExpenses)
  },[expenses, selectedUser, selectedCategory])

  useEffect(() => {
    if (filteredExpenses) {
      const elements = filteredExpenses.map((expense, i)=> {
        return (
          <tr key={i}>
            <td>{`${expense.user.firstName} ${expense.user.lastName}`}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>${expense.cost}</td>
            <td className="table-change">
              <div onClick={()=>{handleEditMode(expense)}}>
                <FontAwesomeIcon className="icon-button edit" icon={faEdit} />
              </div>
              <div onClick={()=>{dispatch(deleteExpense(expense))}}>
                <FontAwesomeIcon className="icon-button trash" icon={faTrash} />
              </div>
            </td>
          </tr>
        )
      })
      setExpenseElements(elements)      
    }
  }, [filteredExpenses, handleEditMode, dispatch])

  return (
    <div className="table-container">
      <table className="expenses-table">
        <thead>
          <tr>
            <th className="table-header" colSpan={5} >Expenses</th>
          </tr>
        
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {expenseElements.map(element => {
            return element
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ExpensesTable
