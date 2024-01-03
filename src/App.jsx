import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TimeLine = (props) =>{
let {year,event} = props
return(
  <div>
    <h1>year {year}:</h1>
    <p>{event}</p>
  </div>
)
}

export default TimeLine
