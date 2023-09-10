import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

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
        </button>
      </div>

      <div className="loginmodal">
        <h2>Login</h2>
        <h2>Password</h2>
      </div>
    </div>
  );
}

export default App;
