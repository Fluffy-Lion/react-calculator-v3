import { useState } from "react";
import { evaluate } from 'mathjs'

const App = () => {
  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
  const [total, setTotal] = useState("")

  const clickHandler = (value) => {
    if(value === "="){
      setTotal(evaluate(total))
    } else if (value === "c"){
      setTotal("")
    } else {
      setTotal( total + value)
    }
  }
  return (
    <div>
      <h1>calculator v3</h1>
      <h2>{total}</h2>
      {buttons.map((button, index) => {
        return (
          <div>
          <Button key={index} value={button} clickHandler={clickHandler} />
          </div>
        )
      })}
    </div>
  );
}

const Button = ({ clickHandler, value }) => {
  return (
    <button onClick={() => clickHandler(value)}>
      {value}
    </button>
  )
}

export default App;
