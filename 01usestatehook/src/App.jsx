import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);

  return (
    <div>
      <div className="home">
        <h1>Use of useState Hook</h1>
        <h2>Show | Hide password</h2>
        <input type={showPassword ? "text" : "password"} />
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button> <br /><br />
        <button onClick={()=>{setShowLoginCard(!showLoginCard)}}>ShowLoginCard</button>
      </div>



{/* login box */}

      <div className={`loginmodal ${showLoginCard===true ? "show": " "} `}>
        <span onClick={()=>{setShowLoginCard(!showLoginCard)}}>&times;</span>
        
        <h2>Login</h2>
        <h2>Password</h2>
      </div>
    </div>
  );
}

export default App;
