import React from 'react'
import { Section, WrapSection, Bottom, Top, SlideProps } from 'core'

const welcome: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <Top>
                <p>Meeting by ITSumma</p>
            </Top>
            <h1>Introduction</h1>
            <h3>FRONTEND #1</h3>
            <Bottom>
                <p></p>
                <a href="#" target="_blank">@stronger_myself</a>
            </Bottom>
        </div>
    )
}

const mainIssues: SlideProps = {
    isWelcome: true,
    children: (
        <Section>
            <WrapSection>
                <h2>Чем занимается фронтенд разработчик?</h2>
                <h2>Как стать фронтенд разработчиком?</h2>
            </WrapSection>
        </Section>
    )
}

const plan: SlideProps = {
    isWelcome: true,
    children: (
        <Section>
            <WrapSection>
                <h3>План:</h3>
                <ol>
                    <li>Ключевые обязанности</li>
                    <li>Технология верстки</li>
                    <li>Программирование</li>
                    <li>Окружение разработчика</li>
                    <li>Тулинг</li>
                    <li>Серверный и клиетский рендеринг</li>
                    <li>Библиотеки и фреймворки</li>
                </ol>
            </WrapSection>
        </Section>
    )
}

const s1: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <h1>1. Ключевые обязанности</h1>
        </div>
    )
}

const s2: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <h1>2. Технология верстки</h1>
        </div>
    )
}

const s3: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <h1>3. Окружение верстальщика</h1>
        </div>
    )
}

const s4: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <h1>4. Тулинг</h1>
        </div>
    )
}

const s5: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <h1>5. SSR, CSR</h1>
        </div>
    )
}

const s6: SlideProps = {
    style: {color: '#fff', backgroundColor: '#303030'},
    isWelcome: true,
    children: (
        <div>
            <h1>6. Библиотеки и фреймворки</h1>
        </div>
    )
}

export {
    welcome,
    mainIssues,
    plan,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
}
