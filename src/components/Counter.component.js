
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
  <div className="pm-container">
    <p>{ label }</p>
    <div className="flex-row">
      <button onClick={ onDecrement } className="btn btn-sm"
        disabled={ value === minValue ? true : false }>-</button>
      <div className="pm-displayer flex-center"><span>{value}</span></div>
      <button onClick={ onIncrement } className="btn btn-sm"
        disabled={ value === maxValue ? true : false }>+</button>
    </div>
  </div>
)
