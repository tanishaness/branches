/* USE STATE 
const App = () => {
  const [a, setA] = useState({a:'tani' , age:22}) 
  const [arr, setArr] = useState([1,2,3,4,5])
  
const arrWork = () => {
  //destructuring assignment
  const newA = {...a}; //copy object a to newA
  newA.age = 23; //modify age property
  setA(newA); //update state with new object

  const newArr = [...arr]; //copy array arr to newArr
  newArr.push(6);
  setArr(newArr); //update state with new array

  //OTHER SINTAX
  // setA(prevA => ({...prevA, age: 23})); //update state with modified age property
  
  }
  return (

    <div>
      <h1>Array elements: {arr.join(', ')}</h1>
      <h1>value of a is {a.a} and age is {a.age}</h1>
      <button onClick={arrWork}>Click</button>
    </div>
  )
}
*/
import { useState } from 'react'
/* 
const App = () => {
  //batch update example
  const [num, setnum] = useState(10)

  const handleClick = () => {
    setnum(num + 1)
    setnum(num + 1)
    setnum(num + 1)
    console.log(num); //will log the old value of num due to batching
  }
 // to do this better

 const handleClick = () => {
    setnum(prevnum => prevnum + 1)
    setnum(prevnum => prevnum + 1)
    setnum(prevnum => prevnum + 1)
    console.log(num); //will log the old value of num due to batching
  return (
    <>
    <h1>Value of num is {num}</h1>
    <button onClick={handleClick}>click</button>
    </>
    
  )
}

export default App
*/

// INPUT N FORMS

import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" placeholder="Enter your name" />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}



export default App