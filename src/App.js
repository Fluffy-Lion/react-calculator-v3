import { useState } from "react";
import { evaluate } from "mathjs"

const App = () => {
  const buttons = useState(["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="])
  const [total, setTotal] = useState("")
  return (
    <div>
      <h1>calculator v3</h1>
    </div>
  );
}

export default App;
