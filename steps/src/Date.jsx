import React from 'react'
import { useState } from 'react'



const Date = () => {
    // const newDate = new Date();
    const [isOpen, setIsOpen] = useState(true)
    const [count, setCount] = useState(0)
    // newDate.setDate(newDate.getDate() + count)
  return (
    <>
    <button className="close" onClick={()=>setIsOpen((prevState) => !prevState)}>&times;</button>
    {isOpen && (<div className="steps">
        <div className="buttons">
        <button style={{backgroundColor : '#7950f2', color: '#fff'}}>Previous</button>
        <button style={{backgroundColor : '#7950f2', color: '#fff'}}>Next</button>
      </div>

      <p className='message'>{count}</p>

      <div className="buttons">
        <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={()=>setCount(c=>c-1)}>Previous</button>
        <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={()=>setCount(c=>c+1)}>Next</button>
      </div>
    </div>)}
</> 
  )
}

export default Date

