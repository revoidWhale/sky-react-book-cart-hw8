import { useState } from 'react'

const IncrementFn = () => {
  const [count, setCount] = useState(0)

  const inc = () => setCount(count + 1)

  return (
    <div>
      <span>Вы нажали кнопку {count} раз</span>
      <button type="button" onClick={inc}>
        +
      </button>
    </div>
  )
}
export default IncrementFn
