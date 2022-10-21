import React, {useState, useEffect} from 'react'
import './Clock.css'
export default function Clock() {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, sethour] = useState(0)
  
  useEffect (()=>{
    setInterval(()=>{
      setClock()
    }, 1000)
  })

  const setClock = () => {
    const currentDate = new Date()
    setSecond(currentDate.getSeconds())
    setMinute(currentDate.getMinutes())
    sethour(currentDate.getHours())
  }

  console.log(second, 'second')
  console.log(minute, 'minute')
  console.log(hour, 'hour')
  return (
    <div className='container'>
      <div id='clock'>
        <div id='hour'>{hour}</div>
        <div id='minutes'>{minute}</div>
        <div id='seconds'>{second}</div>
      </div>
    </div>
  )
}
