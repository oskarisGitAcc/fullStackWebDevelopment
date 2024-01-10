const Header = ({ courseName }) => {
  return (
    <h3>{courseName}</h3>
  );
};

const Part = ({ partName, exercises }) => {
  return (
    <p>
      {partName} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} partName={part.name} exercises={part.exercises} />
      ))}
      <p><strong>Total number of exercises: {totalExercises}</strong></p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h2>Web development curriculum</h2>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;