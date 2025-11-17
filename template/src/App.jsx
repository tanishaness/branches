import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(20) 
  const [username, setUsername] = useState("Tanisha")
  const [users, setUsers] = useState([10,20,30])

  function changeA() {
    setA(a + 1);
    setUsername("Tanisha Kothari");
    setUsers([...users, a + 1]);
  }

  return (
    <div>
      <h1>Users: {users.join(", ")}</h1>
      <h1>Value of user is {username}</h1>
      <h1>value of a is {a}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}


export default App