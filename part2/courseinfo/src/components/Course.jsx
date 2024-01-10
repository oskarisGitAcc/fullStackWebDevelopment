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

export default Course