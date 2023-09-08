import { useState } from 'react'
import './App.css'

function App() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1>Use of useState Hook</h1>
      <h2>Show | Hide password</h2>
      <input type= {showPassword ? "text" : "password"} />
      <button onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? "Hide" : "Show"}</button>
    </>
  )
}

export default App
