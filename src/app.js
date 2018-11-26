import './styles/main.css'
import './styles/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import { Settings } from './components/PlusMinus.component.js'
import { Timer } from './components/Timer.component.js'
import './components/SettingsBar.component.scss'

const byId = elem => document.getElementById(elem)
const testDiv = byId('testDiv')

Settings.defaultProps = {
  value : 0,
  minValue : 0,
  maxValue : 60
}
Timer.defaultProps = {
  minutes : 25
}

ReactDom.render(<Timer minutes={1}/>, testDiv)
