import "./Button.css";


import React from 'react'

const Button = ({symbol,color}) => {
  return (
    <button className="button-wrapper" style={{ backgroundColor: color }}>{symbol}</button>
  )
}

export default Button