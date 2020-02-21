import React, { FunctionComponent } from 'react'
const c = require('./typog.sass')

interface Props {
    style?: React.CSSProperties
    subtitle?: string
}

export const Quote: FunctionComponent<Props> = ({
    children, style, subtitle
}) => {
    return (
        <div className={c.quote} style={style}>
            <div className={c.quoteWrap}>
                <svg className={c.quoteIcon} viewBox="0 0 298.667 298.667" fill="currentColor">
                    <polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667"/>
                    <polygon points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667"/>
                </svg>
                {children}
                {subtitle && (
                    <div className={c.quoteSub}>{subtitle}</div>
                )}
            </div>
        </div>
    )
}

Quote.displayName = 'Quote'
