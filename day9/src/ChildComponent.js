import React from 'react'

const ChildComponent = ({ user }) => {
    const { name, age, section } = user
    return (
        <div style={{ border: "1px solid black" }}>
            <h1>name : {name}</h1>
            <h1>age : {age}</h1>
            <h1>section : {section}</h1>
        </div>
    )
}

export default ChildComponent