
import React from 'react'

export const Counter =
  ({
    label,
    value,
    minValue,
    maxValue,
    onIncrement,
    onDecrement,
    position
  }) => (
    <div className={`counter-container flex-column space-between ${position}`}>
      <p className="counter-label flex-center">{ label }</p>
      <div className="height-70 flex-row space-between align-center">
        <button className="counter-btn flex-center"
          onClick={ onIncrement }
          disabled={ value === maxValue ? true : false }>+</button>
        <p className="counter-displayer flex-center"><span>{value}</span></p>
        <button
          className="counter-btn flex-center"
          onClick={ onDecrement }
          disabled={ value === minValue ? true : false }>-
        </button>
      </div>
    </div>
)
