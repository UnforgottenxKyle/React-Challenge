import React from 'react'
import { useState } from 'react'
import Time from './Time'

const message = [
  "Learn React",
  "100KG Bench Press",
  "Finish the task"
]
const App = () => {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  return (

    <>
        <button className="close" onClick={()=>setIsOpen((prevState) => !prevState)}>&times;</button>
        {isOpen && (<div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <p className='message'>Step {step} : {message [step - 1]}</p>

          <div className="buttons">
            <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={() => step > 1 ? setStep((prevState) => prevState - 1) : ''}>Previous</button>
            <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={() => step < 3 ? setStep((prevState) => prevState + 1) : ''}>Next</button>
          </div>
        </div>)} 
        <Time />
    </> 
  )
}

export default App