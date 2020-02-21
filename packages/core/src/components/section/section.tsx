import React, { FunctionComponent, CSSProperties } from 'react'
const c = require('./section.sass')

interface Props {
    style?: CSSProperties
}

export const Section: FunctionComponent<Props> = ({
    style, children
}) => {
    return (
        <div className={c.section} style={style}>{children}</div>
    )
}

Section.displayName = 'Section'
