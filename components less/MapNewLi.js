import { useEffect, useState } from 'react'

const MapNewLi = () => {
  const [numbers, setNumbers] = useState([1, 666, 3, 4])
  const [count, setCount] = useState(0)

  const addNumber = () => {
    const randNum = Math.round(Math.random() * 100)
    const newArr = [...numbers, randNum]
    setNumbers(newArr)
  }

  // // componentDidMount
  // useEffect(() => {
  //   console.log('Компонент Вмотрирован')
  // }, [])

  // // componentDidUpdate только для numbers
  // useEffect(() => {
  //   console.log('numbers обновлен')
  // }, [numbers])

  // // componentDidUpdate только для count
  // useEffect(() => {
  //   console.log('count обновлен')
  // }, [count])

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('компонент обновлен')
  // })

  // componentWillUnmount + componentDidMount
  useEffect(() => {
    console.log('компонент создался')
    return () => {
      console.log('компонент удалился')
    }
  }, [])

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button type="button" onClick={addNumber}>
        Новое число
      </button>
    </div>
  )
}
export default MapNewLi
