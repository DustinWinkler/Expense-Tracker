import { useState } from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses';
import Header from './components/Header/Header';
import UsersSidebar from './components/UsersSidebar/UsersSidebar';

function App() {
  const sample_users = [
    {
      firstName: "Dustin",
      lastName: "Winkler",
      id: "Dustin1234",
      budget: 1000
    },
    {
      firstName: "Jason",
      lastName: "Kim",
      id: "Jason1234",
      budget: 10000
    }
  ]

  const sample_expenses = [
    {
      user: {
        firstName: "Jason",
        lastName: "Kim",
        id: "Jason1234",
        budget: 10000
      },
      category: "Travel",
      cost: 8000,
      description: "Fully paid Vacation for your hard work :)",
      holderID: "Jason1234",
      id: "Travel1234"
    },
    {
      user: {
        firstName: "Dustin",
        lastName: "Winkler",
        id: "Dustin1234",
        budget: 1000
      },
      category: "Food",
      cost: 12,
      description: "Mac 'n' Cheese",
      holderID: "Dustin1234",
      id: "Food1234"
    }
  ]

  const [users, setUsers] = useState(sample_users)
  const [expenses, setExpenses] = useState(sample_expenses)
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  function addUser(user) {
    // stand in for UUID from database
    user.id = user.firstName + Math.floor(Math.random() * 1000)

    setUsers(prev => {
      return [...prev, user]
    })
    setSelectedUser(user)
  }

  function updateUser(user) {
    setUsers(prev => {
      let updatedArr = prev.filter(userFromState => {
        return (userFromState.id !== user.id)
      })
      return [...updatedArr, user]
    })
  }

  function deleteUser(user) {
    
    setExpenses(prev => {
      return prev.filter(expense => {
        return (expense.holderID !== user.id)
      })
    })

    setUsers(prev => {
      return prev.filter(userFromState => {
        return (user.id !== userFromState.id)
      })
    })
    if (selectedUser) {
      if (selectedUser.id === user.id) {
        setSelectedUser(null)
      }
    }
  }

  function addExpense(expense) {
    // stand in for UUID from database
    expense.id = expense.category + Math.floor(Math.random() * 1000)
    setExpenses(prev => {
      return [...prev, expense]
    })
  }

  function updateExpense(expense) {
    setExpenses(prev => {
      let updatedArr = prev.filter(expenseFromState => {
        return (expenseFromState.holderID !== expense.holderID)
      })
      return [...updatedArr, expense]
    })
  }

  function deleteExpense(id) {
    setExpenses(prev => {
      return prev.filter(expense => {
        return expense.id !== id
      })
    })
  }

  function changeSelectedUser(user) {
    if (selectedUser === user) {
      setSelectedUser(null)
    } else {
      setSelectedUser(user)
    }
  }

  function changeSelectedCategory(category) {
    setSelectedCategory(category)
  }

  function pingErrorMessage(message) {
    clearTimeout()
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000);
  }

  return (
    <div className="App">
      <Header errorMessage={errorMessage} />
      <div className="main-container">
        <UsersSidebar users={users} addUser={addUser} updateUser={updateUser} deleteUser={deleteUser} changeSelectedUser={changeSelectedUser} selectedUser={selectedUser} pingErrorMessage={pingErrorMessage} />
        <div className="expenses-container">
          <Expenses expenses={expenses} selectedUser={selectedUser} addExpense={addExpense} updateExpense={updateExpense} deleteExpense={deleteExpense} selectedCategory={selectedCategory} changeSelectedCategory={changeSelectedCategory} pingErrorMessage={pingErrorMessage} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
