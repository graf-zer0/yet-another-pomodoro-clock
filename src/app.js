
import React from 'react'
import ReactDom from 'react-dom'

import { Main } from './components/Main.js'

import './styles/main.css'
import './styles/main.scss'

const byId = elem => document.getElementById(elem)
const testDiv = byId('testDiv')

ReactDom.render(<Main />, testDiv)
