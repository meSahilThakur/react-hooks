import { useRef } from 'react'
import './App.css'

function App() {

  let inputRef = useRef(null);

  function handleInput(){
    inputRef.current.value = "1000000";      // to change the current state to 1000
    inputRef.current.select();                // current.select() is used to select the value of input
    inputRef.current?.setSelectionRange(0,3);     // current?.setSelectionRange() is used to select the value range of input.
    inputRef.current.focus();                 // it focuses on the input field.
    inputRef.current.style.color = "red";      // it changes the color of input text.
    // inputRef.current.style.display = "none";    // it hides the input field.

  }

  return (
    <>
      <h1>Use of useRef Hook</h1>
      <h2>useRef hook lets you reference the value that is not needed for rendering.</h2>
      <h2>useRef hook is used to manipulate the Dom directly.</h2>
      <h3>e.g. Suppose we have to control the input with the click of button.</h3>
      <p>click on handle button to see</p>
      <input ref={inputRef} type="text" /> <br /><br />
      <button onClick={handleInput}>Handle Input</button>
    </>
  )
}

export default App
