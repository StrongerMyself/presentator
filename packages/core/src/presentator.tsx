import React, { FunctionComponent, createContext, useState, useEffect } from 'react'
import { Container, Slide, SlideProps } from './components/layout'
const c = require('./style.sass')

interface Props {
    slides: SlideProps[]
}

export const Context = createContext({ active: 0 })

const start = +localStorage['activeSlide'] || 0

export const Presentator: FunctionComponent<Props> = ({
    slides
}) => {
    const [active, setActive] = useState(start)

    const onSetByStep = (add) => {
        setActive(d => {
            let num = d + add
            let res = (num >= 0 && num < slides.length) ? num : d
            localStorage['activeSlide'] = res
            return res
        })
    }

    const onKeyDown = (e) => {
        if (document.activeElement.tagName === 'BODY') {
            // console.log(e)
            switch(e.code) {
                case 'ArrowRight':
                    return onSetByStep(1)
                case 'ArrowLeft':
                    return onSetByStep(-1)
                case 'Space':
                    return e.shiftKey ? onSetByStep(-1) : onSetByStep(1)
                default:
                    break
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [])
    
    console.log(slides)

    return (
        <Context.Provider value={{ active }}>
            <Container>
                {slides.map((el, i) => (
                    <Slide key={i} index={i} {...el}/>
                ))}
            </Container>
        </Context.Provider>
    )
}

Presentator.displayName = 'Presentator'
