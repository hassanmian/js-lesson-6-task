import React from 'react';
import { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutYouPage from './pages/AboutYouPage'

import { UserContext } from './contexts/UserContext'

function App() {
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  return (
    <div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-you">About You</Link></li>
      </ul>
    </div>
  );
}

export default App;
