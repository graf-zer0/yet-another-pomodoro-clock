
import React from 'react'
import ReactDom from 'react-dom'
import { Counter } from './Counter.component.js'

import { Timer } from './Timer.component.js'

const toMinutes = sec => Math.floor( sec / 60 )
let sessionID = null
let breakID = null
export class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      defaultBreakLength : 300,
      defaultSessionLength : 1500,
      breakLength : 0,
      sessionLength : 0,
      currentTime : 0,
      mode : 'fresh',
      active : false
    }

    this.getLength = this.getLength.bind(this)
    this.incrementLength = this.incrementLength.bind(this)
    this.decrementLength = this.decrementLength.bind(this)
    this.decrementTime = this.decrementTime.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)

  }
  componentDidMount() {

    let { defaultSessionLength, defaultBreakLength, sessionLength, breakLength } = this.state

    this.setState({
      sessionLength : sessionLength = defaultSessionLength,
      breakLength : breakLength = defaultBreakLength
    })
  }
  getLength( property ) {

    return this.state[ property ] * 60;
  }

  incrementLength( property ){

    this.setState({
      [ property ] : this.state[ property ] + 60
    })


  }
  decrementLength( property ){
    this.setState({
      [ property ] : this.state[ property ] - 60
    })
  }
  setMode( $mode ) {
    console.log(`setting mode to : ${$mode}`)
    this.setState({
      mode : this.state.mode = $mode
    })
  }

  setActive ( bool ) {
    this.setState({
      active : this.state.active = bool
    })
  }

  setTimer ( time ) {
    this.setState({
      currentTime : this.state.currentTime = time
    })
  }

  decrementTime () {

    let { currentTime, mode, sessionLength, breakLength } = this.state
    if( currentTime === 0 && mode === 'session' ) {
      this.setTimer ( breakLength )
      this.setMode( 'break' )
      this.startBreak()
    }

    else if( currentTime === 0 && mode === 'break' ) {
      this.setTimer( sessionLength )
      this.setMode( 'session' )
      this.startSession()
    }
    else this.setTimer( currentTime - 1)
}
  startSession() {

    if ( breakID ) clearInterval( breakID )
    sessionID = setInterval( this.decrementTime, 1000 )
  }

  startBreak() {

    if( sessionID ) clearInterval ( sessionID )
    breakID = setInterval( this.decrementTime, 1000 )
  }

  startTimer(){

    let { mode, sessionLength } = this.state

    this.setActive( true )

    if( mode === 'fresh') {
      this.setTimer( sessionLength )
      this.setMode( 'session' )
      this.startSession()
}
    else if( mode === 'session') this.startSession()
    else this.startBreak()
}

  pauseTimer() {

    if(this.state.mode === 'session' ) clearInterval(sessionID)
    else clearInterval(breakID)
    this.setActive( false )

  }
  resetTimer() {

    let { defaultSessionLength, defaultBreakLength, sessionLength, breakLength, mode } = this.state

    if( mode === 'session') clearInterval( sessionID )
    else if( mode === 'break') clearInterval( breakID )

    sessionLength = defaultSessionLength
    breakLength = defaultBreakLength

    this.setMode('fresh')
    this.setTimer( sessionLength )
    this.setState({ sessionLength, breakLength })
    this.setActive( false )

  }
  render(){

    const {
      incrementLength,
      decrementLength,
      getLength,
      startTimer,
      pauseTimer,
      resetTimer
    } = this

    const {
      sessionLength,
      breakLength,
      currentTime,
      mode,
      active
    } = this.state

    return (
      <div>
        <Counter
          label = "Session length"
          minValue ={ 0 }
          maxValue ={ 10 }
          value={ sessionLength / 60 }
          onIncrement={ _ => incrementLength('sessionLength') }
          onDecrement={ _ => decrementLength('sessionLength') }
          />
        <Counter
            label = "Break length"
            minValue ={ 0 }
            maxValue ={ 10 }
            value={ breakLength / 60 }
            onIncrement={ _ => incrementLength('breakLength') }
            onDecrement={ _ => decrementLength('breakLength') }
            />
          <Timer
            active = { active }
            currentTime = { mode === 'fresh' ? sessionLength : currentTime }
            handleStart = { startTimer }
            handlePause = { pauseTimer }
            handleReset = { resetTimer }
            />
          <p>{ mode }</p>
      </div>
    )
  }
}
