
import React from 'react'
import './Counter.style.scss'

export const Counter =
  ({
    label,
    value,
    minValue,
    maxValue,
    onIncrement,
    onDecrement
  }) => (
  <div className="counter-container lg-container">
    <p className = "flex-center mb-15 lg-1-full">{ label }</p>
      <button onClick={ onDecrement }
        className = "btn btn-sm lg-2-l"
        disabled={ value === minValue ? true : false }>-</button>
      <div className="counter-displayer lg-2-c flex-center"><span>{value}</span></div>
      <button onClick={ onIncrement }
        className="btn btn-sm lg-2-r"
        disabled={ value === maxValue ? true : false }>+</button>
  </div>
)
