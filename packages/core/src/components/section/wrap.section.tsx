import React, { FunctionComponent } from 'react'
const c = require('./section.sass')

interface Props {}

export const WrapSection: FunctionComponent<Props> = ({
    children
}) => {
    return (
        <div className={c.wrap}>{children}</div>
    )
}

WrapSection.displayName = 'WrapSection'
