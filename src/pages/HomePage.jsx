import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function HomePage() {
    const { firstName, setFirstName, lastName, setLastName } = useContext(UserContext)
    return (
        <div>
            <h1>Home</h1>
            <input onChange={(e) => setFirstName(e.target.value)} placeholder="John"/>
            <input onChange={(e) => setLastName(e.target.value)} placeholder="Doe"/>
            <p>You have entered: {firstName} {lastName}</p>
        </div>
    )
}