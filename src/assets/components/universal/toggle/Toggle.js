import React, { useState } from 'react'
import './toggle.scss'

export default function Toggle() {
const [checked,setChecked] = useState(false)

function handleChange(){
  setChecked(!checked)
}

  return (
    <div className='toggle-block'>
         <input onChange={handleChange} checked={checked}  type="checkbox" id="switch" /><label htmlFor='switch' className='toggle'>Toggle</label>
    </div>
  )
}
