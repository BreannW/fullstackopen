import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) =>{
	return (
		<h1> {props.course} </h1>
		)
}


const Part = (props) => {
	return(
		<p>
        {props.part1} {props.exercises1}
      	</p>
		)
}
const Content = (props) => {
	const parts = props.parts
	return parts.map(part => (
		<p>{part.name} {part.exercises} </p>
		))
}


const Total = (props) => {
	const parts = props.parts
	const exercises =[]
	parts.forEach(part => {
		exercises.push(part.exercises)
	})

	function add(a,b){
		return a+b
	}
	return(
		<p> Total Parts: {exercises.reduce(add)} </p>
		) 
}


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
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
	  <Total parts={course.parts}/> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))