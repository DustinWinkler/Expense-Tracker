import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../../state/slices/selectedUser'
import { addUser, updateUser } from '../../state/slices/users'
import { RootState } from '../../store'
import { UserInterface } from '../../typescript/interfaces'
import './UsersSidebar.css'

interface UsersSidebarProps {
  pingErrorMessage: Function
  deleteUser: Function
}

const UsersSidebar: FC<UsersSidebarProps> = ({ pingErrorMessage, deleteUser }) =>  {

  const users = useSelector((state: RootState) => state.users)
  const selectedUser = useSelector((state: RootState) => state.selectedUser)
  const dispatch = useDispatch()

  const [addingUser, setAddingUser] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [budget, setBudget] = useState(0)
  const [budgetError, setBudgetError] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [filterInput, setFilterInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<UserInterface[]>(users)

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

  function handleFirstName(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setFirstName(value)
  }

  function handleLastName(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setLastName(value)
  }

  function handleBudget(e: React.FormEvent<HTMLInputElement>) {
    const value = +e.currentTarget.value
    setBudget(value)
    if (!!value) {
      setBudgetError(false)
    } else {
      setBudgetError(true)
      pingErrorMessage('The budget must be a valid number')
    }
  }

  function handleEditMode(user: UserInterface) {
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setBudget(user.budget)
    setEditMode(true)
    setAddingUser(true)
    if (selectedUser.user?.id !== user.id) {
      dispatch(setSelectedUser(user))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (!budgetError) {
      if (editMode) {
        console.log('this');
        if (!selectedUser.user) return
        dispatch(updateUser({
          firstName,
          lastName,
          budget,
          id: selectedUser.user.id
        }))

        dispatch(setSelectedUser({
          firstName,
          lastName,
          budget,
          id: selectedUser.user.id
        }))

        toggleAddingUser()
        
      } else {
        
        dispatch(addUser({
          firstName,
          lastName,
          budget,
          id: Math.floor(Math.random()*10000) + 1
        }))
    
        setFirstName('')
        setLastName('')
        toggleAddingUser()
      }
    }
  }

  function handleFilterInput(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setFilterInput(value.toLowerCase())
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
          <div key={i} className={"user-container " + (selectedUser.user?.id === user.id ? "selected" : "")}>
            <div className="user-container-header">
              <h2 onClick={()=>{dispatch(setSelectedUser(user))}}>{`${user.firstName} ${user.lastName}`}</h2>
            
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
