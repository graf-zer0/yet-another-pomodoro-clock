
import React from 'react'
import './Counter.style.scss'
/*
export class Counter2 extends React.Component{
  constructor(props){
    super(props)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter() {
    let {value, maxValue} = this.props;
    value < maxValue ? this.props.onIncrement() : null;
  }
  decrementCounter() {
    let {value, minValue} = this.props;
    value > minValue ? this.props.onDecrement() : null;
  }

  render(){
    let {  maxValue, minValue, value } = this.props
    return (
      <div className="pm-container">
        <p>{this.props.label}</p>
        <div className="flex-row">
          <button onClick={this.decrementCounter} className="btn btn-sm"
            disabled={value === minValue ? true : false}>-</button>
          <div className="pm-displayer flex-center"><span>{value}</span></div>
          <button onClick={this.incrementCounter} className="btn btn-sm"
            disabled={ value === maxValue ? true : false }>+</button>
        </div>
      </div>
    )
  }
}
*/
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
    <p>{label}</p>
    <div className="flex-row">
      <button onClick={onDecrement} className="btn btn-sm"
        disabled={value === minValue ? true : false}>-</button>
      <div className="pm-displayer flex-center"><span>{value}</span></div>
      <button onClick={onIncrement} className="btn btn-sm"
        disabled={ value === maxValue ? true : false }>+</button>
    </div>
  </div>
)
