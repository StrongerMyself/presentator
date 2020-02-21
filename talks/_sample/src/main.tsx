import React, { FunctionComponent } from 'react'
import { Sample } from 'sample'

interface Props {}

export const Main: FunctionComponent<Props> = (props) => {
    return (
        <Sample/>
    )
}

Main.displayName = 'Main'
