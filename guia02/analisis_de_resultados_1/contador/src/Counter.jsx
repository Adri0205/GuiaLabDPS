import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [value, setValue] = useState(0)

  return (
    <div className="counter">
      <div className="display">{value}</div>
      <div className="buttons">
        <button className="btn decrement" onClick={() => setValue(v => v - 1)}>-</button>
        <button className="btn increment" onClick={() => setValue(v => v + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
