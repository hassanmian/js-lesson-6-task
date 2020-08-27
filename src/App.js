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
      
      <UserContext.Provider value={{firstName, setFirstName, lastName, setLastName}}>
        <Switch>
          <Route path="/about-you">
            <AboutYouPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
