import React from 'react'

export class Settings extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      maxValue : this.props.maxValue,
      minValue : this.props.minValue,
      value : this.props.minValue
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter() {
    let {value, maxValue} = this.state
      value < maxValue ? this.setState({value : value + 1}) : value
  }
  decrementCounter() {
    let {value, minValue} = this.state
      value > minValue ? this.setState({value : value - 1}) : value
  }

  render(){
    let {value, maxValue, minValue} = this.state
    return (
      <div className="pm-container flex-row">
        <button onClick={this.decrementCounter} className="btn btn-sm"
          disabled={value === minValue ? true : false}>-</button>
        <div className="pm-displayer flex-center"><span>{this.state.value}</span></div>
        <button onClick={this.incrementCounter} className="btn btn-sm"
          disabled={value === maxValue ? true : false}>+</button>
      </div>
    )
  }
}
