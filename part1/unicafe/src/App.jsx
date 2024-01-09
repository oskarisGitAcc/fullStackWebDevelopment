import { useState } from 'react'

const Statistics = ({type, value}) => (
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
  const total = good + neutral + bad
  
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  if (total != 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => increaseGood()} text="good" />
        <Button handleClick={() => increaseNeutral()} text="neutral" />
        <Button handleClick={() => increaseBad()} text="bad" />
        <h1>statistics</h1>
        <Statistics type={"good"} value={good} />
        <Statistics type={"neutral"} value={neutral} />
        <Statistics type={"bad"} value={bad} />
        <Statistics type={"all"} value={total} />
        <Statistics type={"average"} value={(good - bad) / total} />
        <Statistics type={"positive"} value={100 * good / total + " %"} />
      </div>
    )
  } else {
    return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => increaseGood()} text="good" />
      <Button handleClick={() => increaseNeutral()} text="neutral" />
      <Button handleClick={() => increaseBad()} text="bad" />
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
}

export default App