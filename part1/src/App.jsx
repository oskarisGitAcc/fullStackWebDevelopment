const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <p key={index}>
          {part} {props.exercises[index]}
        </p>
      ))}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.reduce((sum, exercises) => sum + exercises, 0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component'];
  const exercises = [10, 7, 14];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App