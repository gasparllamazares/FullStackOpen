import React from 'react';
import ReactDOM from 'react-dom'

// Define the main App component
const App = () => {
  // Define the course name and parts using an array of objects
  const course = "Half Stack application development"
  const parts = [
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

  // Return the App component with child components Header, Content, and Total  
  return (
    <div>
    <Header course={course} />
    <Content parts={parts}/>
    <Total parts={parts} />
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
  console.log(props)
  console.log(props.parts)
  props.parts.forEach(element => {
    console.log(element.name + " " + element.exercises)
    }
  )
  // Use map() to create an array of Part components for each part object in the parts array
  // and return it wrapped in a React fragment
  return(
    <>
    {props.parts.map(part => {
      return <Part name={part.name} exercise={part.exercises}/>
    })}
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
  return(
    <div>
    <p>
      Number of exercises = {props.number}
    </p>
    </div>
  )
}


ReactDOM.render(<App></App>, document.getElementById('root'))