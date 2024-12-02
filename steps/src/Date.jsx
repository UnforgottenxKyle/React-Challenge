import React from 'react'
import { useState } from 'react'

const Date = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [date, setDate] = useState(new Date())
  return (
    <>
    <button className="close" onClick={()=>setIsOpen((prevState) => !prevState)}>&times;</button>
    {isOpen && (<div className="steps">
        <div className="buttons">
        <button style={{backgroundColor : '#7950f2', color: '#fff'}}>Previous</button>
        <button style={{backgroundColor : '#7950f2', color: '#fff'}}>Next</button>
      </div>

      <p className='message'>date</p>

      <div className="buttons">
        <button style={{backgroundColor : '#7950f2', color: '#fff'}}>Previous</button>
        <button style={{backgroundColor : '#7950f2', color: '#fff'}}>Next</button>
      </div>
    </div>)}
</> 
  )
}

export default Date

