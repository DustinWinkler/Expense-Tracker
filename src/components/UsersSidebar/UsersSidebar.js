import React, { useState, useEffect } from 'react'
import './UsersSidebar.css'

function UsersSidebar({ users, addUser, deleteUser }) {
  const [addingUser, setAddingUser] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [maxBudget, setMaxBudget] = useState(0)
  const [budgetError, setBudgetError] = useState(false)
  const [filterInput, setFilterInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    if (filterInput === '') {
      setFilteredUsers(users)
    } else {
      setFilteredUsers(prev => {
        return prev.filter(user => {
          return (
            user.firstName.includes(filterInput) ||
            user.lastName.includes(filterInput)
          )
        })
      })
    }

    
  }, [filterInput, users])

  function toggleAddingUser() {
    setAddingUser(prev => {
      return !prev
    })
  }

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
  }

  function handleMaxBudget(e) {
    setMaxBudget(e.target.value)
    const num = parseFloat(e.target.value)
    if (!!num) {
      setBudgetError(false)
    } else {
      setBudgetError(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!budgetError) {
      addUser({
        firstName,
        lastName,
        maxBudget
      })
  
      setFirstName('')
      setLastName('')
      toggleAddingUser()
    }
  }

  function handleFilterInput(e) {
    setFilterInput(e.target.value)
  }

  return (
    <div className="users-container">
      <h1>Users</h1>
      <h4>psst... click a name to filter expenses</h4>

      <input className="userSearch" value={filterInput} onChange={handleFilterInput} placeholder="Search" />

      <button className={"toggleUserForm " + (addingUser ? "rotated" : "")} onClick={toggleAddingUser}>+</button>
      
      <form className={"userForm " + (addingUser ? "formOn" : "")}>
        <label>First Name</label>
        <input value={firstName} onChange={handleFirstName} />
        <label>Last Name</label>
        <input value={lastName} onChange={handleLastName} />
        <label>Budget</label>
        <input className={budgetError && 'error'} value={maxBudget} onChange={handleMaxBudget} />
        <button onClick={handleSubmit}>Create User</button>
      </form>
      
      {filteredUsers.map(user => {
        return (
          <div className="user-container">
            <h2>{user.firstName}</h2>
            <button>TrashCan</button>
          </div>
        )
      })}

    </div>
  )
}

export default UsersSidebar
