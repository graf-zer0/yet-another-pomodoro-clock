
import React from 'react'
import './Counter.style.scss'

export class Counter extends React.Component{
  constructor(props){
    super(props)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }
  getCounter(){
    return this.props.counterValue;
  }
  incrementCounter() {
    let {value, maxValue} = this.props;
    //value < maxValue ? this.setState({value : value + 1}) : value
    value < maxValue ? this.props.onIncrement() : null;
  }
  decrementCounter() {
    let {value, minValue} = this.props;
    //value > minValue ? this.setState({value : value - 1}) : value
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
