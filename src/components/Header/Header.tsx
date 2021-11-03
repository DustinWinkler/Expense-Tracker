import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import './Header.css'

function Header() {
  const errorMessage = useSelector((state: RootState) => state.errorMessage)

  return (
    <div>
      <div className={"error-message " + (errorMessage.message ? "shown" : "")}>
        {errorMessage.message && 
          errorMessage.message
        }
      </div>

      <h1 className="main-header">
      Expense Tracker
    </h1>
    </div>
  )
}

export default Header
