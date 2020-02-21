import React, { FunctionComponent, useContext, useEffect, useRef } from 'react'
import { Context } from '../../presentator'
const c = require('./layout.sass')

export interface SlideProps {
    index?: number
    style?: {
        backgroundImage?: string,
        backgroundColor?: string,
        color?: string
    }
    isWelcome?: boolean
    children?: React.ReactNode
}

const size = {
    width: 1200,
    height: 800
}

export const Slide: FunctionComponent<SlideProps> = ({
    children, index = 0, style = {}, isWelcome = false
}) => {
    const { active } = useContext(Context)
    const refContent = useRef<HTMLDivElement>(null)

    const onScale = () => {
        const scale = Math.min(
            window.innerWidth / size.width,
            window.innerHeight / size.height
        )
        refContent.current.style.zoom = scale.toString()
    }
    
    useEffect(() => {
        onScale()
        window.addEventListener('resize', onScale)
        return () => window.removeEventListener('resize', onScale)
    }, [])

    const dir = index === active ? 'center' : index < active ? 'prev' : 'next'
    const styleBg = {
        backgroundImage: style.backgroundImage && `url(${style.backgroundImage})`,
        backgroundColor: style.backgroundColor,
    }
    const styleContent = {
        color: style.color,
        ...size
    }
    return (
        <div className={c.slide + ' ' + c[`slide_${dir}`]}>
            <div className={c.bg} style={styleBg}></div>
            <div className={c.content} ref={refContent} style={styleContent}>
                {children} 
                <div className={c.index + ` ${c[`index_hide_${isWelcome}`]}`}></div>
            </div>
        </div>
    )
}

Slide.displayName = 'Slide'
