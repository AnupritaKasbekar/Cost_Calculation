import React from 'react'
import { useEffect,useState,useRef } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeComp=()=> {
    let navigate = useNavigate()
   
  const [range,setRange]= useState([
    {
        startDate:new Date(),
        endDate:addDays(new Date(),7),
        key: 'selection'
    }
  ])
  //open
  const[open,setOpen] = useState(false)
  //click outside and close
  const refOne = useRef(null)
  useEffect(()=>{
   
    document.addEventListener("keydown",hideOnEscape,true)
    document.addEventListener("click",hideOnClickOutside,true)  
  },[])
  const hideOnEscape=(e)=>{
   
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
  
 
  return (

    <div className='calenderWrap'>
      
      <p><small>Select Dates for selecting material in that perticular date</small></p>
     
     
      <input
        id='inputBox'
        value={`${format(range[0].startDate,"yyyy.MM.dd")} to ${format(range[0].endDate,"yyyy.MM.dd")}`}
        readOnly
        className="inputBox"
        onClick={()=>setOpen(open =>!open)}
      />
      
     
      <div ref={refOne}>
      {open &&
        <DateRange
          onChange={item=>setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="horizontal"
          className="calenderElement"
      />
      }
      <br></br>
      <div className='d-flex justify-content-center'>
      <button className='fetch_data' type='submit button'onClick={()=>{
         console.log("start date:",(format(range[0].startDate,"yyyy.MM.dd")))
         console.log("end date:",format(range[0].endDate,"yyyy.MM.dd"))
         console.log("............................")
      //   let purchase_date = format(range[0].startDate,"yyyy.MM.dd");
      let in_date = format(range[0].startDate,"yyyy.MM.dd");
         let sale_date =format(range[0].endDate,"yyyy.MM.dd")
         console.log("st date:",in_date)
       navigate(`/date/${in_date}`)
       
      }}>fetch data</button>
      </div>
 
      </div>
     
     
    
      
    </div>
  )
}

export default DateRangeComp
