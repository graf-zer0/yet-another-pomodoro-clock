
import React from 'react'
import './Timer.style.scss'

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
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.displayStatus = this.displayStatus.bind(this)
        this.displayTime = this.displayTime.bind(this)
        console.log(this.state.secondsLeft)
        console.log(this.state.minutesLeft)
      }
      startTimer(){
        this.setState({status : this.state.status = 'active'})
        timer = setInterval(_=> {
           if( this.state.secondsLeft > 0 ) this.setState({ secondsLeft : this.state.secondsLeft - 1 })
           if(this.state.secondsLeft === 0)
           {
             this.setState({status : this.state.status = 'break'})
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
      displayTime(){

        let { secondsLeft } = this.state;
        let minutes = Math.ceil(secondsLeft/60)

        if( minutes < 10 ) minutes = '0' + minutes
        if( secondsLeft < 10 ) secondsLeft = '0' + secondsLeft
        if( secondsLeft % 60 === 0) {
          return `${ minutes } : 00`
        }
        else return `${ minutes - 1 } : ${secondsLeft}`
      }
      displayStatus(){
        switch(this.state.status) {
          case 'active' :
            return 'Activity in progress'
          case 'paused' :
            return 'Activity paused'
          case 'fresh' :
            return 'Ready to go'
          case 'break' :
            return 'break time !'
        }
      }
      render(){
        let { displayTime, status} = this.state
        return (
          <div className="grid-wrapper">
            <p className="timer-displayer g-r1-full flex-center">{this.displayTime()}</p>
            <p className="g-r2-full flex-center">{this.displayStatus()}</p>
            <button
              className='btn btn-success g-r3-c1'
                onClick={status !== 'active' ? this.startTimer : this.pauseTimer}>
                {status === 'active' ? 'Pause' : 'Start'}
            </button>
            <button
              className='btn btn-danger g-r3-c2'
              disabled={status === 'active' || status === 'fresh' ? true : false} onClick={this.resetTimer}>Reset
            </button>
          </div>
        )
      }
    }
