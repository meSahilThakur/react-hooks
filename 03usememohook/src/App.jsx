import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  const multiCountMemo = useMemo(function multiCount(){
    console.log("multicount");
    return count * 5;
  }, [ count ])

  return (
    <div>
      <h1>Use of useMemo Hook</h1>
      <h2>useMemo hook is used to cache the result of Calculation, so it avoids unneccessary rerendering.</h2>
      <h2>useMemo & useCallback both hooks are used to increase the perforamance.</h2>
      <h2>count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <h2>Item : {item}</h2>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
      <h2>MultiCount : {multiCountMemo}</h2>
    </div>
  );
}

export default App;
