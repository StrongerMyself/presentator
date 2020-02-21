import React, { FunctionComponent } from 'react'
const c = require('./layout.sass')

interface Props {}

export const Top: FunctionComponent<Props> = ({
    children
}) => {
    return (
        <div className={c.top}>{children}</div>
    )
}

Top.displayName = 'Top'
