import React, { useState } from 'react'
import  './box.css'

const Box = ({children,type='solid',className}) => {
  return (
    <div className={`box ${type!=='solid' && 'border-box'} ${className}`}>
      { children}
    </div>
  )
}

export default Box