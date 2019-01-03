
import React from 'react'
import ReactDom from 'react-dom'
import { Counter } from './Counter.component.js'

import {

  TimeDisplayer,
  StatusDisplayer,
  StartStopBtn,
  ResetBtn

} from './Timer.components.js'

import { Footer } from './Footer.component.js'

let sessionID = null
let breakID = null
export class Main extends React.Component{
  constructor( props ) {
    super( props );
    this.state = {
      defaultBreakLength : 300,
      defaultSessionLength : 1500,
      breakLength : 0,
      sessionLength : 0,
      currentTime : 0,
      mode : 'ready',
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

    if( mode === 'ready') {
      this.setTimer( sessionLength )
      this.setMode( 'session' )
      this.startSession()
}
    else if( mode === 'session') this.startSession()
    else this.startBreak()
}

  pauseTimer() {

    if(this.state.mode === 'session' ) clearInterval( sessionID )
    else clearInterval( breakID )
    this.setActive( false )

  }
  resetTimer() {

    let {
      defaultSessionLength,
      defaultBreakLength,
      sessionLength,
      breakLength,
      mode
    } = this.state

    if( mode === 'session') clearInterval( sessionID )
    else if( mode === 'break') clearInterval( breakID )

    sessionLength = defaultSessionLength
    breakLength = defaultBreakLength

    this.setMode( 'ready' )
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
      defaultSessionLength,
      defaultBreakLength,
      sessionLength,
      breakLength,
      currentTime,
      mode,
      active
    } = this.state

    return (
      <div className="layout-wrapper layout-grid">

          <header className="row-1-2 col-1-13"></header>
          <Counter
            position = "row-2-3 col-2-6"
            label = "Session length"
            minValue ={ 1 }
            maxValue ={ defaultSessionLength }
            value={ sessionLength / 60 }
            onIncrement={ () => incrementLength('sessionLength') }
            onDecrement={ () => decrementLength('sessionLength') }
            />
          <Counter
              position = "row-2-3 col-8-12"
              label = "Break length"
              minValue ={ 1 }
              maxValue ={ defaultBreakLength }
              value={ breakLength / 60 }
              onIncrement={ () => incrementLength('breakLength') }
              onDecrement={ () => decrementLength('breakLength') }
              />
            <StatusDisplayer
              position = "row-4-5 col-1-13"
              status = { mode }
            />
          <StartStopBtn
            position = "row-5-6 col-3-6"
            active = { active }
            handleStart = { startTimer }
            handlePause = { pauseTimer }
            />
          <ResetBtn
              position = "row-5-6 col-8-11"
              active = { active }
              handleReset = { resetTimer }
              />
            <TimeDisplayer
              time = { mode === 'ready' ? sessionLength : currentTime }
              position = "row-3-4 col-1-13"
            />
          <Footer
            position = "row-6-7 col-1-13"
          />
      </div>
    )
  }
}
