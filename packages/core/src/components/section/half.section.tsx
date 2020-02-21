import React, { FunctionComponent, CSSProperties } from 'react'
const c = require('./section.sass')

interface Props {
    style?: CSSProperties
}

export const HalfSection: FunctionComponent<Props> = ({
    children, style
}) => {
    return (
        <div className={c.half} style={style}>{children}</div>
    )
}

HalfSection.displayName = 'HalfSection'
