import React, { useState, useEffect } from 'react'
import ExpensesTable from '../ExpensesTable/ExpensesTable'
import './Expenses.css'

function Expenses({ expenses, selectedUser, selectedCategory, changeSelectedCategory, addExpense, deleteExpense, updateExpense, pingErrorMessage }) {
  const [total, setTotal] = useState(0)
  const [selectedUserTotal, setSelectedUserTotal] = useState(0)
  const [selectedCategoryTotal, setSelectedCategoryTotal] = useState(0)
  const [addingExpense, setAddingExpense] = useState(false)
  const [category, setCategory] = useState('Food')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState(0)
  const [costError, setCostError] = useState(false)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    let newTotal = 0
    if (expenses.length > 0) {
      expenses.forEach(expense => {
        newTotal += parseFloat(expense.cost)
      })
    } else {
      newTotal = 0
    }
    setTotal(newTotal)

  }, [expenses])

  useEffect(() => {
    let newTotal = 0
    if (expenses.length > 0 && selectedUser) {
      let filteredExpenses = expenses.filter(expense => {
        return expense.holderID === selectedUser.id
      })
      filteredExpenses.forEach(expense => {
        newTotal += parseFloat(expense.cost)
      })
    } else {
      newTotal = 0
    }
    setSelectedUserTotal(newTotal)

  }, [expenses, selectedUser])

  useEffect(()=>{
    let newTotal = 0
    if (expenses.length > 0 && selectedCategory) {
      let filteredExpenses = expenses.filter(expense => {
        return expense.category === selectedCategory
      })
      filteredExpenses.forEach(expense => {
        newTotal += parseFloat(expense.cost)
      })
    } else {
      newTotal = total
    }
    setSelectedCategoryTotal(newTotal)
  },[selectedCategory, expenses, total])

  useEffect(()=>{
    setAddingExpense(false)
  },[selectedUser])

  function toggleAddingExpense() {
    if (!selectedUser) return
    setAddingExpense(prev => {
      return !prev
    })
    if (editMode) {
      setEditMode(false)
      setCategory('Food')
      setDescription('')
      setCost(0)
    }
  }

  function handleEditMode(expense) {
    setCategory(expense.category)
    setDescription(expense.description)
    setCost(expense.cost)
    setEditMode(true)
    setAddingExpense(true)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleCost(e) {
    setCost(e.target.value)
    const num = parseFloat(e.target.value)
    console.log(selectedUser.budget, selectedUserTotal + num);
    if (!num || ((selectedUserTotal + num) > parseFloat(selectedUser.budget))) {
      setCostError(true)
      if (!num) {
        pingErrorMessage('The cost must be a valid number')
      } else {
        pingErrorMessage('That would put them over budget')
      }
    } else {
      setCostError(false)
    }
  }


  function handleSubmit(e) {
    e.preventDefault()

    if (!costError) {
      if (editMode) {
        updateExpense({
          name: `${selectedUser.firstName} ${selectedUser.lastName}`,
          category,
          cost,
          description,
          holderID: selectedUser.id,
        })
        toggleAddingExpense()
        
      } else {
        addExpense({
          user: selectedUser,
          category,
          cost,
          description,
          holderID: selectedUser.id
        })
    
        setCategory('Food')
        setDescription('')
        setCost(0)
        toggleAddingExpense()
      }
    }
  }

  function handleSelectedCategory(e) {
    if (e.target.value === "None") {
      changeSelectedCategory(null)
    } else {
      changeSelectedCategory(e.target.value)
    }
  }

  return (
    <div className="expenses-header-container">
      <div className="expense-totals">
        <div className="expenses-totals-container">
          <p className="expenses-header-money">${total}</p>
          <p className="expenses-header-description">
            TOTAL COMPANY EXPENSES
          </p>
        </div>

        <div className="expenses-totals-container">
          <p className="expenses-header-money">${selectedUserTotal}</p>
          <p className="expenses-header-description">
            {selectedUser ? 
              `TOTAL EXPENSES FOR: ${selectedUser.firstName}` :
              "SELECT A USER TO SEE THEIR TOTAL"
            }
          </p>
        </div>

        <div className="expenses-totals-container">
          <p className="expenses-header-money">${selectedCategoryTotal}</p>
          <p className="expenses-header-description">
            FILTER BY: <form className="filter-category-form">
              <select onChange={handleSelectedCategory}>
                <option value={null}>None</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="Supplies">Supplies</option>
              </select>
            </form> 
            TOTAL EXPENSES
          </p>
        </div>
        
      </div>

      <button onClick={toggleAddingExpense} className=""> {selectedUser ? `Add Expense for ${selectedUser.firstName} ` : "Select a User to add an Expense for them "}
        <span className={"plus-button " + (addingExpense ? " rotated" : "")}> +</span>
      </button>

      

      <form className={"expense-form " + (addingExpense ? "form-on" : "")}>
        <label>Description</label>
        <input value={description} onChange={handleDescription} />
        <label>Cost</label>
        <input className={costError ? 'error' : ''} value={cost} onChange={handleCost} />
        <label>Category</label>
        <select onChange={handleCategory}>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Health">Health</option>
          <option value="Supplies">Supplies</option>
        </select>
        <button onClick={handleSubmit}>{editMode ? "Update" : "Create"} Expense</button>
      </form>

      <ExpensesTable expenses={expenses} updateExpense={updateExpense} deleteExpense={deleteExpense} selectedUser={selectedUser} selectedCategory={selectedCategory} handleEditMode={handleEditMode} />

    </div>
  )
}

export default Expenses
