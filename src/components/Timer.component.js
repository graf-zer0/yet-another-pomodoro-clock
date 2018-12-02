import React from 'react'
let timer
export class Timer extends React.Component {
  constructor(props){
    super(props)
      this.state = {

        initialTime : this.props.minutes,
        secondsLeft : 60 * this.props.minutes,
        status : 'fresh'
        }
        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.renderStatus = this.renderStatus.bind(this)
        this.handleTime = this.handleTime.bind(this)
        console.log(this.state.secondsLeft)
        console.log(this.state.minutesLeft)
      }
      startTimer(){
        this.setState({status : this.state.status = 'active'})
        timer = setInterval(_=> {
           if( this.state.secondsLeft > 0 ) this.setState({secondsLeft : this.state.secondsLeft - 1})
           if(this.state.secondsLeft === 0)
           {
             this.setState({status : this.state.status = 'fresh'})
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
          secondsLeft : this.state.initialTime * 60,
          status : this.state.status = 'fresh'
        })
      }
      handleTime(){
        console.log('handle time')
        let { secondsLeft } = this.state;
        let minutes = Math.ceil(secondsLeft/60)
        if(minutes < 10 ) minutes = '0' + minutes
        if(secondsLeft < 10 ) secondsLeft = '0' + secondsLeft
        if( secondsLeft % 60 === 0){
          return `${ minutes } : 00`
        }
        else return `${ minutes - 1 } : ${secondsLeft}`
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
        let { handleTime, status} = this.state
        return (
          <div className="grid-wrapper">
            <p className="timer-displayer g-r1-full flex-center">{this.handleTime()}</p>
            <p className="g-r2-full flex-center">{this.renderStatus()}</p>
            <button
              className='btn btn-success g-r3-c1'
              disabled={status === 'active' ? true : false} onClick={this.startTimer}>Start
            </button>
            <button
              className=' btn btn-pause g-r3-c2'
              disabled={status === 'paused' ? true : false} onClick={this.pauseTimer}>Pause
            </button>
            <button
              className='btn btn-danger g-r4-full'
              disabled={status === 'active' ? true : false} onClick={this.resetTimer}>Reset
            </button>
          </div>
        )
      }
    }
