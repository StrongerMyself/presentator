import React from 'react'
import ReactDOM from 'react-dom'
import * as Slides from './slides'
import { Presentator } from 'core'

const slides = Object.keys(Slides).map(key => Slides[key])

ReactDOM.render(<Presentator slides={slides}/>, document.getElementById('root'))
