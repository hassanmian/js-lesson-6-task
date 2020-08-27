import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function AboutYouPage() {
    const { firstName, lastName } = useContext(UserContext)
    return (
        <div>
            <h1>About You</h1>
            <p>
                Your first name is {firstName}<br/>
                Your last name is {lastName}<br/>
            </p>
        </div>
    )
}