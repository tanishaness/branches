import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(20) //read only a, write only setA and their value 20


  function changeA() {
    setA(a + 1);
  }

  return (
    <div>
      <h1>value of a is {a}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}


export default App