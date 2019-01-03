
import React from 'react'


  const zeroFill = time => time < 10 ? `0${time}` : `${time}`
  const getFullMinutes = sec => sec > 60 ? Math.floor( sec / 60 ) : 0
  const getRestSeconds = sec => sec > 60 ? sec % 60 : sec
  const convertTime = sec => `${ zeroFill( getFullMinutes(sec) ) } : ${ zeroFill( getRestSeconds(sec) ) } `


  export const StatusDisplayer = props => (
    <p
      id = "timer-status"
      className = { `${props.position} flex-center` }>
      { props.status.toUpperCase() }
    </p>
  )
  export const TimeDisplayer = props => (
    <p
      id = "time-displayer"
      className = {
        `${props.position} flex-center ${ props.time < 60 ?
          'txt-red' : 'txt-black'}`
        }>
        { convertTime( props.time ) }
    </p>
  )
  export const StartStopBtn = props => (
    <button
      id="start_stop-btn"
      className = {`${props.position} flex-center`}
      onClick={ props.active ? props.handlePause : props.handleStart }>
      { props.active ? 'Pause' : 'Start' }
    </button>
  )
  export const ResetBtn = props => (
    <button
      id="reset-btn"
      className = {`${props.position} flex-center`}
      onClick={ props.handleReset }>
      Reset
    </button>
  )
