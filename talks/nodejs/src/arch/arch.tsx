import React, { FunctionComponent } from 'react'
const c = require('./arch.sass')

interface Props {}

export const Arch: FunctionComponent<Props> = (props) => {
    return (
        <div className={c.arch}>
            <div className={c.row}>
                <div className={c.item} style={{backgroundColor: '#eee'}}>JavaScript Code</div>
            </div>
            <div className={c.row}>
                <div className={c.item} style={{backgroundColor: '#a8d9e8'}}>C/C++ Bindings</div>
                <div className={c.item} style={{backgroundColor: '#a8d9e8'}}>C/C++ Addons</div>
            </div>
            <div className={c.row}>
                <div className={c.item} style={{backgroundColor: '#ffdcdc'}}>V8</div>
                <div className={c.item} style={{backgroundColor: '#ffdcdc'}}>Libuv</div>
                <div className={c.item} style={{backgroundColor: '#c4f5d6'}}>c-area</div>
                <div className={c.item} style={{backgroundColor: '#c4f5d6'}}>http<br/>parser</div>
                <div className={c.item} style={{backgroundColor: '#c4f5d6'}}>crypto</div>
                <div className={c.item} style={{backgroundColor: '#c4f5d6'}}>zlib</div>
            </div>
        </div>
    )
}

Arch.displayName = 'Arch'
