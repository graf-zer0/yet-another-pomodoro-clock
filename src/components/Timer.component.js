import React from 'react'
let timer
export class Timer extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        minutesLimit : this.props.minutes - 1,
        minutesLeft : this.minutesLimit,
        secondsLeft : 59
        }
        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
      }
      startTimer(){
        timer = setInterval(_=> {
           if( this.state.secondsLeft > 0 ) this.setState({secondsLeft : this.state.secondsLeft - 1})
           if( this.state.secondsLeft === 0 && this.state.minutesLeft > 0)
            {this.setState({minutesLeft : minutesLeft - 1})
            this.setState({secondsLeft : secondsLeft = 59 })}
           if(this.state.secondsLeft === 0 && this.state.minutesLeft === 0)
           {
             console.log('Times up!')
             clearInterval(timer)
           }

        },1000)

      }
      pauseTimer(){
        clearInterval(timer)
      }
      resetTimer(){
        console.log(this.state.minutesLimit)
        this.setState({minutesLeft : this.state.minutesLimit})
        this.setState({secondsLeft : 59})
      }
      render(){
        let { minutesLeft, secondsLeft} = this.state
        return (
          <div>
            <p>minutes left : {minutesLeft}</p>
            <p>seconds left : {secondsLeft}</p>
              <button onClick={this.startTimer}>Start</button>
              <button onClick={this.pauseTimer}>Pause</button>
              <button onClick={this.resetTimer}>Reset</button>
          </div>
        )
      }
    }
