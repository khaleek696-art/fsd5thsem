import React from 'react'
import ChildComponent from './ChildComponent'

const App = () => {
  const user = { name: "Khaleek", age: 21, section: "CSE-18" }
  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <ChildComponent user={user} />
    </div>
  )
}

export default App