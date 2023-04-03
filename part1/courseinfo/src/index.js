import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  const course = "Half Stack application development"

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
    <Header course={course} />
    <Content
      part1={part1.name} exercises1={part1.exercises} 
      part2={part2.name} exercises2={part2.exercises} 
      part3={part3.name} exercises3={part3.exercises} 
    />
    <Total number={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
    <h1>
      {props.course}
    </h1>
    </div>
  )
}


const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part name={props.part1} exercise={props.exercises1} />
      <Part name={props.part2} exercise={props.exercises2} />
      <Part name={props.part3} exercise={props.exercises3} />
    </div>
  )
}


const Part = (props) => {
  return(
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
    </div>
  )
}

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