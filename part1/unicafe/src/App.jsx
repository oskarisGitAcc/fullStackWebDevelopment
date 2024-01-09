import { useState } from 'react'

const Stat = ({type, value}) => (
  <p>{type} {value}</p>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const total = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => increaseGood()} text="good" />
      <Button handleClick={() => increaseNeutral()} text="neutral" />
      <Button handleClick={() => increaseBad()} text="bad" />
      <h1>statistics</h1>
      <Stat type={"good"} value={good} />
      <Stat type={"neutral"} value={neutral} />
      <Stat type={"bad"} value={bad} />
      <Stat type={"all"} value={total} />
      <Stat type={"average"} value={(good - bad) / total} />
      <Stat type={"positive"} value={good / total + " %"} />
    </div>
  )
}

export default App