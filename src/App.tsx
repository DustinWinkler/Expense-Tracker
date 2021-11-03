import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Expenses from './components/Expenses/Expenses';
import Header from './components/Header/Header';
import UsersSidebar from './components/UsersSidebar/UsersSidebar';
import { setErrorMessage } from './state/slices/errors';
import { deleteExpense } from './state/slices/expenses';
import { setSelectedUser } from './state/slices/selectedUser';
import { deleteUser } from './state/slices/users';
import { RootState } from './store';
import { UserInterface } from './typescript/interfaces';

function App() {
  const dispatch = useDispatch()
  const expenses = useSelector((state: RootState) => state.expenses)
  const selectedUser = useSelector((state: RootState) => state.selectedUser)

  function deleteUserFunc(user: UserInterface) {
    expenses.forEach(expense => {
      if (expense.holderID === user.id) {
        dispatch(deleteExpense(expense))
      }
    });

    dispatch(deleteUser(user))

    if (selectedUser) {
      if (selectedUser.user?.id === user.id) {
        dispatch(setSelectedUser(null))
      }
    }
  }

  function pingErrorMessage(message: string) {
    clearTimeout()
    dispatch(setErrorMessage(message))
    setTimeout(() => {
      dispatch(setErrorMessage(null))
    }, 5000);
  }

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <UsersSidebar deleteUser={deleteUserFunc} pingErrorMessage={pingErrorMessage} />
        <div className="expenses-container">
          <Expenses pingErrorMessage={pingErrorMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;