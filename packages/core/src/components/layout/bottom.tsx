import React, { FunctionComponent } from 'react'
const c = require('./layout.sass')

interface Props {}

export const Bottom: FunctionComponent<Props> = ({
    children
}) => {
    return (
        <div className={c.bottom}>{children}</div>
    )
}

Bottom.displayName = 'Bottom'
