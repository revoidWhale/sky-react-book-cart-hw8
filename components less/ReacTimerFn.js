import { useEffect, useState } from 'react'

const ReactTimerFn = () => {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)

  const handleToggle = () => {
    setIsCounting(!isCounting)
  }

  const handleReset = () => {
    setCount(0)
    setIsCounting(false)
  }

  // componentDidUpdate
  useEffect(() => {
    let interval = null
    if (isCounting)
      interval = setInterval(() => {
        setCount((prevState) => prevState + 1)
      }, 1000)
    else if (!isCounting && count !== 0) {
      clearInterval(interval)
    }
    // componentWillUnmount
    return () => clearInterval(interval)
  }, [isCounting, count])

  return (
    <div className="ReacTimer">
      <h1>React Timer Fn</h1>
      <h3>{count}</h3>
      <button type="button" onClick={handleToggle}>
        {isCounting ? 'Stop' : 'Start'}
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default ReactTimerFn
