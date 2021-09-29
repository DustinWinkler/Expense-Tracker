import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import UsersSidebar from './components/UsersSidebar/UsersSidebar';

function App() {
  const [users, setUsers] = useState([])
  const [expenses, setExpenses] = useState([])

  function addUser(user) {
    setUsers(prev => {
      return [...users, user]
    })
  }

  function deleteUser(user) {
    setUsers(prev => {
      return prev.filter(userFromState => {
        return (user.firstName !== userFromState.firstName && user.lastName !== userFromState.lastName)
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <UsersSidebar users={users} addUser={addUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
