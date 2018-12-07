
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
      active,
      mode
    }) =>
    (
      <div className="grid-wrapper full-width">
        <p
          className = { `timer-displayer g-r1-full flex-center txt-big ${currentTime < 60 ? 'txt-red' : 'txt-black'}` } >
          { convertTime( currentTime ) }
        </p>
        <p className = 'g-r2-full txt-medium flex-center'>{ mode.toUpperCase() }</p>
        <button
          className='btn btn-success g-r3-c1 txt-xsmall'
            onClick={ active ? handlePause : handleStart }>
            { active ? 'Pause' : 'Start' }
        </button>
        <button
          className='btn btn-danger g-r3-c2 txt-xsmall'
           onClick={ handleReset }>Reset
        </button>
      </div>
    )
