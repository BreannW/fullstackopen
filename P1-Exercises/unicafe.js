import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) =>{ 
	return(

		<tr> 
		<td>
		{props.text} 
		</td> 
		<td>
		{props.value}
		</td>
		 </tr>)

}

const Statistics = (props) => {
	if(props.allClicks >= 1) {
		return(
		<div>
        <h1> statistics </h1>

       <table>
       <tbody>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="total" value={props.allClicks}/>
        <Statistic text="average"  value={(props.good + (props.neutral*0) + (props.bad*-1) )/ 3}/> 
        <Statistic text="positive" value={(props.good/props.allClicks)*100}/> 
        </tbody>
        </table>
      </div>
      )

	}

	return (
		<p> no feedback given </p> )
	
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick =() => { 
    setAll(allClicks+1)
    setGood(good+1)
  }

   const handleNeutralClick =() => { 
    setAll(allClicks+1)
    setNeutral(neutral+1)
  }

   const handleBadClick =() => { 
    setAll(allClicks+1)
    setBad(bad+1)
  }
  return (
    <div>
      <div>
        <h1> give feedback </h1>
         <button onClick={handleGoodClick} > good </button>
         <button onClick={handleNeutralClick} > neutral </button>
         <button onClick={handleBadClick} > bad </button> 
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)