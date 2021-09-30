import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import './ExpensesTable.css'

function ExpensesTable({ expenses, deleteExpense, selectedUser, selectedCategory, handleEditMode }) {

  // useeffect to create table elements then iterate over them in return section
  const [filteredExpenses, setFilteredExpenses] = useState([])
  const [expenseElements, setExpenseElements] = useState([])

  useEffect(() => {
    // if selectedUser, filter by their id
    // if selectedCategory, filter by that
    // update state

    let newExpenses = expenses

    if (selectedUser) {
      newExpenses = newExpenses.filter(expense => {
        return (expense.holderID === selectedUser.id)
      })
    }

    if (selectedCategory) {
      newExpenses = newExpenses.filter(expense => {
        return (expense.category === selectedCategory)
      })
    }

    setFilteredExpenses(newExpenses)

  },[expenses, selectedUser, selectedCategory])

  useEffect(() => {
    if (filteredExpenses) {
      setExpenseElements(filteredExpenses.map((expense, i)=> {
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
              <div onClick={()=>{deleteExpense(expense.id)}}>
                <FontAwesomeIcon className="icon-button trash" icon={faTrash} />
              </div>
            </td>
          </tr>
        )
      }))
    }
  }, [filteredExpenses, deleteExpense, handleEditMode])

  return (
    <div className="table-container">
      <table className="expenses-table">
        <thead>
          <tr>
            <th className="table-header" colSpan="5" >Expenses</th>
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
