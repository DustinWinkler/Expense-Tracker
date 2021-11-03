import React, { useState, useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, updateExpense } from '../../state/slices/expenses'
import { setSelectedCategory } from '../../state/slices/selectedCategory'
import { setSelectedUser } from '../../state/slices/selectedUser'
import { RootState } from '../../store'
import { ExpenseInterface } from '../../typescript/interfaces'
import ExpensesTable from '../ExpensesTable/ExpensesTable'
import './Expenses.css'

interface ExpensesProps {
  pingErrorMessage: Function
}

const Expenses: FC<ExpensesProps> = ({ pingErrorMessage }) => {
  const expenses = useSelector((state: RootState) => state.expenses)
  const selectedUser = useSelector((state: RootState) => state.selectedUser)
  const selectedCategory = useSelector((state: RootState) => state.selectedCategory)
  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)
  const [selectedUserTotal, setSelectedUserTotal] = useState(0)
  const [selectedCategoryTotal, setSelectedCategoryTotal] = useState(0)
  const [addingExpense, setAddingExpense] = useState(false)
  const [category, setCategory] = useState('Food')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState(0)
  const [costError, setCostError] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editingID, setEditingID] = useState<string | null>(null)

  useEffect(() => {
    let newTotal = 0
    if (expenses.length > 0) {
      expenses.forEach(expense => {
        newTotal += expense.cost
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
        return expense.holderID === selectedUser.user?.id
      })
      filteredExpenses.forEach(expense => {
        newTotal += expense.cost
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
        return expense.category === selectedCategory.category
      })
      filteredExpenses.forEach(expense => {
        newTotal += expense.cost
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
    if (!selectedUser.user) return
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

  async function handleEditMode(expense: ExpenseInterface) {
    if (selectedUser.user?.id !== expense.user.id) {
      dispatch(setSelectedUser(expense.user))
    }
    await new Promise((res) => setTimeout(res,500))
    setEditingID(expense.id)
    setCategory(expense.category)
    setDescription(expense.description)
    setCost(expense.cost)
    setEditMode(true)
    setAddingExpense(true)
  }

  function handleCategory(e: React.FormEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value
    setCategory(value)
  }

  function handleDescription(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setDescription(value)
  }

  function handleCost(e: React.FormEvent<HTMLInputElement>) {
    const num = +e.currentTarget.value
    setCost(num)
    const userBudget = selectedUser.user?.budget || 0
    console.log(selectedUser.user?.budget, selectedUserTotal + num);
    if (!num || ((selectedUserTotal + num) > userBudget)) {
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


  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (!costError) {
      if (editMode) {
        dispatch(updateExpense({
          user: selectedUser.user,
          category,
          cost,
          description,
          holderID: selectedUser.user?.id,
          id: editingID
        }))
        toggleAddingExpense()
        
      } else {
        dispatch(addExpense({
          user: selectedUser.user,
          category,
          cost,
          description,
          holderID: selectedUser.user?.id,
          id: Math.floor(Math.random()*10000) + 1
        }))
    
        setCategory('Food')
        setDescription('')
        setCost(0)
        toggleAddingExpense()
      }
    }
  }

  function handleSelectedCategory(e: React.FormEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value
    if (value === "None") {
      dispatch(setSelectedCategory(null))
    } else {
      dispatch(setSelectedCategory(value))
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
            {selectedUser.user ? 
              `TOTAL EXPENSES FOR: ${selectedUser.user?.firstName}` :
              "SELECT A USER TO SEE THEIR TOTAL"
            }
          </p>
        </div>

        <div className="expenses-totals-container">
          <p className="expenses-header-money">${selectedCategoryTotal}</p>
          <span className="expenses-header-description">
            FILTER BY: <form className="filter-category-form">
              <select onChange={handleSelectedCategory}>
                <option value={''}>None</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="Supplies">Supplies</option>
              </select>
            </form> 
            TOTAL EXPENSES
          </span>
        </div>
        
      </div>

      <button onClick={toggleAddingExpense} className=""> {selectedUser.user ? `Add Expense for ${selectedUser.user?.firstName} ` : "Select a User to add an Expense for them "}
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

      <ExpensesTable handleEditMode={handleEditMode} />

    </div>
  )
}

export default Expenses
