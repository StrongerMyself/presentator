import React, { FunctionComponent, useState, useEffect, useRef, createContext } from 'react'
const c = require('./layout.sass')

interface Props {}

export const Container: FunctionComponent<Props> = ({
    children
}) => {
    return (
        <div className={c.container}>
            {children}
        </div>
    )
}

Container.displayName = 'Container'
