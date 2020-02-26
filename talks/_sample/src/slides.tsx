import React from 'react'
import { Section, WrapSection, Bottom, Top, SlideProps } from 'core'

const welcome: SlideProps = {
    style: {
        color: '#fff',
        backgroundColor: '#303030'
    },
    isWelcome: true,
    children: (
        <div>
            <Top>
                <p>Meeting by itsumma</p>
            </Top>
            <h1>Title meeting</h1>
            <h3>THEME #1</h3>
            <Bottom>
                <p>DATE</p>
                <a href="#" target="_blank">@stronger_myself</a>
            </Bottom>
        </div>
    )
}

const plan: SlideProps = {
    isWelcome: true,
    children: (
        <Section>
            <WrapSection>
                <h3>Plan:</h3>
                <ol>
                    <li>Intro</li>
                </ol>
            </WrapSection>
        </Section>
    )
}

export {
    welcome,
    plan,
}
