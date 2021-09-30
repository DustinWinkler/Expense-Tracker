import React from 'react'
import './Header.css'

function Header({ errorMessage}) {
  return (
    <div>
      <div className={"error-message " + (errorMessage ? "shown" : "")}>
        {errorMessage && 
          errorMessage
        }
      </div>

      <h1 className="main-header">
      Expense Tracker
    </h1>
    </div>
  )
}

export default Header
