import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import './UsersSidebar.css'

function UsersSidebar({ users, addUser, updateUser, deleteUser, changeSelectedUser, selectedUser, pingErrorMessage }) {
  const [addingUser, setAddingUser] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [budget, setBudget] = useState(0)
  const [budgetError, setBudgetError] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [filterInput, setFilterInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    if (filterInput === '') {
      setFilteredUsers(users)
    } else {
      setFilteredUsers(prev => {
        return prev.filter(user => {
          return (
            user.firstName.toLowerCase().includes(filterInput) ||
            user.lastName.toLowerCase().includes(filterInput)
          )
        })
      })
    }

    
  }, [filterInput, users])

  function toggleAddingUser() {
    setAddingUser(prev => {
      return !prev
    })
    if (editMode) {
      setEditMode(false)
      setFirstName('')
      setLastName('')
      setBudget(0)
    }
  }

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
  }

  function handleBudget(e) {
    setBudget(e.target.value)
    const num = parseFloat(e.target.value)
    if (!!num) {
      setBudgetError(false)
    } else {
      setBudgetError(true)
      pingErrorMessage('The budget must be a valid number')
    }
  }

  function handleEditMode(user) {
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setBudget(user.budget)
    setEditMode(true)
    setAddingUser(true)
    if (selectedUser !== user) {
      changeSelectedUser(user)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!budgetError) {
      if (editMode) {
        updateUser({
          firstName,
          lastName,
          budget,
          id: selectedUser.id
        })
        changeSelectedUser({
          firstName,
          lastName,
          budget,
          id: selectedUser.id
        })
        toggleAddingUser()
        
      } else {
        addUser({
          firstName,
          lastName,
          budget
        })
    
        setFirstName('')
        setLastName('')
        toggleAddingUser()
      }
    }
  }

  function handleFilterInput(e) {
    setFilterInput(e.target.value.toLowerCase())
  }

  return (
    <div className="users-container">
      <h1>Users</h1>
      <h4>Click a name to select them<br></br>
      This will filter to their expenses as well.
      </h4>

      <button className="toggle-user-form" onClick={toggleAddingUser}>Add User <span className={"plus-button " + (addingUser ? "rotated" : "")}>+</span></button>
      
      <form className={"user-form " + (addingUser ? "form-on" : "")}>
        <label>First Name</label>
        <input value={firstName} onChange={handleFirstName} />
        <label>Last Name</label>
        <input value={lastName} onChange={handleLastName} />
        <label>Budget</label>
        <input className={budgetError ? 'error' : ''} value={budget} onChange={handleBudget} />
        <button onClick={handleSubmit}>{editMode ? "Update " : "Create "} User</button>
      </form>

      <input className="user-search" value={filterInput} onChange={handleFilterInput} placeholder="Search Users" />
      
      {filteredUsers.map((user, i) => {
        return (
          <div key={i} className={"user-container " + (selectedUser && selectedUser.id === user.id ? "selected" : "")}>
            <div className="user-container-header">
              <h2 onClick={()=>{changeSelectedUser(user)}}>{`${user.firstName} ${user.lastName}`}</h2>
            
              <div>
                <FontAwesomeIcon onClick={()=>{handleEditMode(user)}} className="icon-button edit" icon={faEdit} />
                <FontAwesomeIcon onClick={()=>{deleteUser(user)}} className="icon-button trash" icon={faTrash} />
              </div>
            </div>
            <p>BUDGET: ${user.budget}</p>
          </div>
        )
      })}

    </div>
  )
}

export default UsersSidebar
