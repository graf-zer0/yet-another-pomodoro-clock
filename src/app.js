
import React from 'react'
import ReactDom from 'react-dom'



import { Main } from './components/Main.js'

import './styles/utility.scss'
import './styles/main.css'
import './styles/basic.scss'


const byId = elem => document.getElementById(elem)
const targetDiv = byId('react-app-pomodoro')


ReactDom.render(<Main />, targetDiv)
