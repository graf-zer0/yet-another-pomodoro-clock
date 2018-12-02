import React from 'react'
let timer
export class Timer extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        minutesLimit : this.props.minutes - 1,
        minutesLeft : this.minutesLimit,
        secondsLeft : 59,
        status : 'fresh'
        }
        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.renderStatus = this.renderStatus.bind(this)
      }
      startTimer(){
        this.setState({status : this.state.status = 'active'})
        timer = setInterval(_=> {
           if( this.state.secondsLeft > 0 ) this.setState({secondsLeft : this.state.secondsLeft - 1})
           if( this.state.secondsLeft === 0 && this.state.minutesLeft > 0)
            {
              this.setState({
                minutesLeft : minutesLeft - 1,
                secondsLeft : secondsLeft = 59
              })
          }
           if(this.state.secondsLeft === 0 && this.state.minutesLeft === 0)
           {
             clearInterval(timer)
           }

        },1000)

      }
      pauseTimer(){
        clearInterval(timer)
        this.setState({status : this.state.status = 'paused'})
      }
      resetTimer(){
        this.setState({
          minutesLeft : this.state.minutesLimit,
          secondsLeft : 59,
          status : this.state.status = 'fresh'
        })
      }
      renderStatus(){
        switch(this.state.status) {
          case 'active' :
            return 'Activity in progress'
          case 'paused' :
            return 'Activity paused'
          case 'fresh' :
            return 'Ready to go'
        }
      }
      render(){
        let { minutesLeft, secondsLeft, status} = this.state
        return (
          <div className="grid-wrapper">
            <p className="g-r1-full flex-center">{minutesLeft} : {secondsLeft}</p>
            <p className="g-r2-full flex-center">{this.renderStatus()}</p>
            <button
              className='g-r3-c1'
              disabled={status === 'active' ? true : false} onClick={this.startTimer}>Start
            </button>
            <button
              className='g-r3-c2'
              disabled={status === 'paused' ? true : false} onClick={this.pauseTimer}>Pause
            </button>
            <button
              className='g-r4-full'
              disabled={status === 'active' ? true : false} onClick={this.resetTimer}>Reset
            </button>
          </div>
        )
      }
    }
