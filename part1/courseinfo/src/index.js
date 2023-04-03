import React from 'react';
import ReactDOM from 'react-dom'

// Define the main App component
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  // Return the App component with child components Header, Content, and Total  
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
    </div> 
  )
}

  // Define the Header component with props
const Header = (props) => {
  return(
    <div>
    <h1>
      {props.course}
    </h1>
    </div>
  )
}

  // Define the Content component with props
const Content = (props) => {
  console.log(props.part)
  
  return(
    <>
      {props.parts.map((part) => (
        <Part key={part.name} name={part.name} exercise={part.exercises} />
      ))}
    </>
  )
  
}

// Define the Part component with props
const Part = (props) => {
  return(
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
    </div>
  )
}
// Define the Total component with props
const Total = (props) => {

  console.log(props.parts)
  let sum = 0
  props.parts.forEach(element => {
    sum += element.exercises
  });
  console.log(sum)

  return(
    <div>
      <p>The total sum of exercieses is {sum}</p>
    </div>
  )
}
  

ReactDOM.render(<App></App>, document.getElementById('root'))