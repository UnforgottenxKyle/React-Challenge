import React from 'react'
import { useState } from 'react'



const Time = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)
    const date1 = new Date()
    date1.setDate(date1.getDate() + count)
  return (
    <>
    <button className="close" onClick={()=>setIsOpen((prevState) => !prevState)}>&times;</button>
    {isOpen && (<div className="steps">
        <div className="buttons">
        <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={()=>setCount2(c=>c-1)}>Previous</button>
        <p>{count2}</p>
        <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={()=>setCount2(c=>c+2)}>Next</button>
      </div>

      <p className='message'>{date1.toDateString()}</p>

      <div className="buttons">
        <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={()=>setCount(c=>c-count2)}>Previous</button>
        <button style={{backgroundColor : '#7950f2', color: '#fff'}} onClick={()=>setCount(c=>c+count2)}>Next</button>
      </div>
    </div>)}
</> 
  )
}

export default Time

