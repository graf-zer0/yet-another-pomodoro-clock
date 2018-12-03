
import React from 'react'
import ReactDom from 'react-dom'
import { Counter } from './Counter.component.js'
import { Timer } from './Timer.component.js'

export class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      breakLength : 5,
      sessionLength : 22
    }
    this.getLength = this.getLength.bind(this)
    this.incrementLength = this.incrementLength.bind(this)
    this.decrementLength = this.decrementLength.bind(this)
  }
  getLength( property ){
    return this.state[ property ];
  }
  incrementLength( property ){

    this.setState({
      [ property ] : this.state[ property ] + 1
    })
  }
  decrementLength( property ){
    this.setState({
      [ property ] : this.state[ property ] - 1
    })
  }
  render(){
    const {
      incrementLength,
      decrementLength,
      getLength
    } = this

    return (
      <div>
        <Counter
          label = "Session length"
          minValue ={ 0 }
          maxValue ={ 60 }
          value={ getLength('sessionLength') }
          onIncrement={ _ => incrementLength('sessionLength') }
          onDecrement={ _ => decrementLength('sessionLength') }
          />
        <Counter
            label = "Break length"
            minValue ={ 0 }
            maxValue ={ 25 }
            value={ getLength('breakLength') }
            onIncrement={ _ => incrementLength('breakLength') }
            onDecrement={ _ => decrementLength('breakLength') }
            />
      </div>
    )
  }
}
