import React, { FunctionComponent } from 'react'
import * as Slides from './slides'
import { Presentator } from 'core'

const slides = Object.keys(Slides).map(key => Slides[key])

export const Main: FunctionComponent = () => {
    return (
        <Presentator slides={slides}/>
    )
}

Main.displayName = 'Main'
