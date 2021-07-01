import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {connect} from "./connection";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">

        <p>

          <button type="button" onClick={() => connect()}>
            Connect to my_room
          </button>
        </p>

      </header>
    </div>
  )
}

export default App
