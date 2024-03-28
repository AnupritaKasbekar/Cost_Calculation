import React from 'react'
import { useEffect,useState,useRef } from 'react';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalenderComp=()=> {
    
  const [calender,setCalender]= useState('')
  //open
  const[open,setOpen] = useState(false)
  //click outside and close
  const refOne = useRef(null)
  useEffect(()=>{
    setCalender(format(new Date(),'yyyy.MM.dd'))
    document.addEventListener("keydown",hideOnEscape,true)
    document.addEventListener("click",hideOnClickOutside,true)  
  },[])
  const hideOnEscape=(e)=>{
    console.log(e.key)
    if(e.key === "Escape")
    {
      setOpen(false)
    }
  }
  const hideOnClickOutside=(e)=>{
      console.log(refOne.current)
      console.log(e.target)
      if(refOne.current && ! refOne.current.contains(e.target))
      {
        setOpen(false)
      }
  }
  const handleSelect = (date)=>{
    //console.log(date)
    //console.log(format(date,"yyyy.MM.dd"))
    setCalender(format(date,"yyyy.MM.dd"))
  }
  return (

    <div className='calenderWrap'>
      <input
        value={calender}
        readOnly
        className="inputBox"
        onClick={()=>setOpen(open =>!open)}
      />
      <div ref={refOne}>
      {open &&
      <Calendar
      date={new Date()}
      onChange={handleSelect}
      className="calenderElement"
      />
      }

      </div>
     
    
      
    </div>
  )
}

export default CalenderComp
