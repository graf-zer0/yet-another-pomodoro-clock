
import React from 'react'
import './Timer.style.scss'

  const zeroFill = time => time < 10 ? `0${time}` : `${time}`
  const getFullMinutes = sec => sec > 60 ? Math.floor( sec / 60 ) : 0
  const getRestSeconds = sec => sec > 60 ? sec % 60 : sec
  const convertTime = sec => `${ zeroFill( getFullMinutes(sec) ) } : ${ zeroFill( getRestSeconds(sec) ) } `


  export const Timer = ({
      currentTime,
      handleStart,
      handlePause,
      handleReset,
      active
    }) =>
    (
      <div className="grid-wrapper">
        <p
          className = { `timer-displayer g-r1-full flex-center ${currentTime < 60 ? 'txt-red' : 'txt-black'}` } >
          { convertTime( currentTime ) }
        </p>
        <button
          className='btn btn-success g-r3-c1'
            onClick={ active ? handlePause : handleStart }>
            { active ? 'Pause' : 'Start' }
        </button>
        <button
          className='btn btn-danger g-r3-c2'
           onClick={ handleReset }>Reset
        </button>
      </div>
    )
