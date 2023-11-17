import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  return (
    <div>
      <h1>Use of useMemo Hook</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <h2>{item}</h2>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}

export default App;
