
import React from 'react'
import ReactDom from 'react-dom'

import { Main } from './components/Main.js'

import './styles/main.css'
import './styles/main.scss'
import './styles/utility.scss'

const byId = elem => document.getElementById(elem)
const targetDiv = byId('react-app-pomodoro')

ReactDom.render(<Main />, targetDiv)
