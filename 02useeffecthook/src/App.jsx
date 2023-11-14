import { useEffect, useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter Mounted");
    return console.log("Counter UnMounted");
  }, []);

  // Empty dependency array means -> whole component (mount/unmount)
  // If dependency has value -> component will update.

  useEffect(() => {
    console.log("Counter Updated");
  }, [counter]);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <div className=" w-full h-screen flex flex-col flex-wrap justify-center items-center gap-20 bg-gray-500">
      <h1 className="text-3xl font-bold underline">Use of useEffect Hook</h1>
      <div className=" text-center">
        <h1>{counter}</h1>
        <h2>Open console to see useEffect</h2>
        <div className="flex gap-3 mt-4">
          <button
            className=" px-4 py-2 rounded-lg hover:bg-green-700 bg-green-800"
            onClick={() => increase()}
          >
            Increase
          </button>
          <button
            className=" px-4 py-2 rounded-lg hover:bg-red-700 bg-red-800"
            onClick={() => decrease()}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
