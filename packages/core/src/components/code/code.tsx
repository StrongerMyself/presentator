import React, { FunctionComponent, useRef, useEffect, useState, CSSProperties } from 'react'
import { highlight, languages } from 'prismjs'
const NormalizerWhitespace = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')
const c = require('./code.sass')

const nw = new NormalizerWhitespace({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
})

interface Props {
    lang: 'js' | 'css' | 'html'
    code: string
    style?: CSSProperties
}

let NEW_LINE_EXP = /\n(?!$)/g

export const Code: FunctionComponent<Props> = ({
    lang, code = '', style
}) => {
    const ref = useRef<HTMLDivElement>()
    const [lines, setLines] = useState([])
    const [html, setHtml] = useState('')

    useEffect(() => {
        let _code = nw.normalize(code)
        _code = highlight(_code, languages[lang], lang)
        let _lines = _code.split(NEW_LINE_EXP)
        // _code = `<span class="${c.rowCode}">${_lines.join(`</span><span class="${c.rowCode}">`)}</span>`
        // setHtml(_code)
        setLines(_lines)
    }, [])

    return (
        <div className={c.code} style={style}>
            <pre>
                <code ref={ref} className={`language-${lang}`}>
                    {lines.map((el, i) => (
                        <span
                            className={c.rowWrap}
                            key={i}
                        >
                            <div className={c.rowOverlay}></div>
                            <span
                                className={c.row}
                                dangerouslySetInnerHTML={{__html: el}}
                            ></span>
                        </span>
                    ))}
                </code>
            </pre>
        </div>
    )
}

Code.displayName = 'Code'
