import React from 'react'
import { Quote, Section, HalfSection, WrapSection, Bottom, Top, SlideProps, Code } from 'core'
import { Arch } from './arch/arch'

const welcome: SlideProps = {
    style: {
        color: '#fff',
        backgroundColor: '#333'
    },
    isWelcome: true,
    children: (
        <div>
            <Top>
                <p>Internal IT Stand Up by ITSumma</p>
            </Top>
            <h1>NodeJS Software</h1>
            <h3>CORETALK #1</h3>
            <Bottom>
                <p>07.10.2019</p>
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
                    <li>Non blocking I/O</li>
                    <li>Architecture</li>
                    <li>Processes</li>
                    <li>Node Foundation</li>
                </ol>
            </WrapSection>
        </Section>
    )
}

const creator: SlideProps = {
    children: (
        <Section>
            <HalfSection>
                <img src={require('../public/ryan-dahl.jpg')}/>
            </HalfSection>
            <HalfSection>
                <div>
                    <h1 className="typog-bg typog-pre">Ryan Dahl</h1>
                    <br/>
                    <h3 className="typog-bg typog-pre">NodeJS Creator</h3>
                    <h3 className="typog-bg typog-pre">Software Engineer</h3>
                </div>
            </HalfSection>
        </Section>
    )
}

const nodejs: SlideProps = {
    children: (
        <Section>
            <HalfSection>
                <img height="300px" src={require('../public/nodejs.png')}/>
            </HalfSection>
            <HalfSection>
                <ol>
                    <li>Runtime platform</li>
                    <li>Written C, C++</li>
                    <li>Single-Thread</li>
                    <li>Non blocking I/O</li>
                    <li>Used everywhere (web, mobile, robots, IoT, …)</li>
                </ol>
            </HalfSection>
        </Section>
    )
}

const preNonBlocking: SlideProps = {
    style: { color: '#fff', backgroundColor: '#333' },
    isWelcome: true,
    children: (
        <div>
            <h1>Non blocking I/O</h1>
        </div>
    )
}

const quoteCreator: SlideProps = {
    children: (
        <Quote subtitle="Ryan Dahl">
            <h2>What if everything was non-blocking? What if you never waited for any IO to happen?</h2>
        </Quote>
    )
}

const blokingIO: SlideProps = {
    children: (
        <div>
            <Code lang="js" code="
                // Blocking I/O

                query = db.query(`SELECT * FROM table`)
                data = query.execute()
                someHandlerForData(data)
                ...
            "/>
        </div>
    )
}

const blokingIO_ex: SlideProps = {
    children: (
        <div>
            <Code lang="js" code="// Blocking I/O"/>
            <br/>
            <img width="1100px" src={require('../public/req-to-multy.svg')}/>
        </div>
    )
}

const nonBlockingIO: SlideProps = {
    children: (
        <div>
            <Code lang="js" code="
                // Non blocking I/O

                query = db.query(`SELECT * FROM table`)
                query.execute((data) => {
                    someHandlerForData(data)
                })
                ...
            "/>
        </div>
    )
}

const nonBlockingIO_ex: SlideProps = {
    children: (
        <div>
            <Code lang="js" code="// Non blocking I/O"/>
            <br/>
            <img width="1100px" src={require('../public/req-to-single.svg')}/>
        </div>
    )
}

const preIotEx: SlideProps = {
    style: { color: '#fff', backgroundColor: '#333' },
    isWelcome: true,
    children: (
        <div>
            <h1>Additional examples</h1>
        </div>
    )
}

const multyThreadIot: SlideProps = {
    children: (
        <>
            <Top><p>Multy thread</p></Top>
            <img width="1100px" src={require('../public/multy-thread.svg')}/>
        </>
    )
}

const pollingCycleIot: SlideProps = {
    children: (
        <>
            <Top><p>Polling cycle</p></Top>
            <img width="1100px" src={require('../public/polling-cycle.svg')}/>
        </>
    )
}

const eventLoopIot: SlideProps = {
    children: (
        <>
            <Top><p>Event Loop</p></Top>
            <img width="1100px" src={require('../public/event-loop.svg')}/>
        </>
    )
}

const preArchitecture: SlideProps = {
    style: { color: '#fff', backgroundColor: '#333' },
    isWelcome: true,
    children: (
        <div>
            <h1>Architecture</h1>
        </div>
    )
}

const architecture: SlideProps = {
    children: (
        <>
            <Top><p>Architecture</p></Top>
            <Arch/>
        </>
    )
}

const v8: SlideProps = {
    children: (
        <Section>
            <Top><p>V8</p></Top>
            <HalfSection>
                <img height="300px" src={require('../public/v8.png')}/>
            </HalfSection>
            <HalfSection>
                <ol>
                    <li>JavaScript Engine</li>
                    <li>Written C, C++</li>
                    <li>Used in chrome</li>
                    <li>Bridge System C++ and JS</li>
                    <li>Drop custom EventLoop</li>
                    <li>...</li>
                </ol>
            </HalfSection>
        </Section>
    )
}

const libuv: SlideProps = {
    children: (
        <Section>
            <Top><p>Libuv</p></Top>
            <HalfSection>
                <img height="300px" src={require('../public/libuv.png')}/>
            </HalfSection>
            <HalfSection>
                <ol>
                    <li>Сross platform</li>
                    <li>Non blocking I/O</li>
                    <li>Event loop backed by epoll, kqueue, IOCP, event ports</li>
                    <li>Asynchronous operations FS, TCP, UDP, sockets</li>
                    <li>Thread pool</li>
                    <li>Written C, C++</li>
                    <li>...</li>
                </ol>
            </HalfSection>
        </Section>
    ) 
}

const preProcesses: SlideProps = {
    style: { color: '#fff', backgroundColor: '#333' },
    isWelcome: true,
    children: (
        <div>
            <h1>Processes</h1>
        </div>
    )
}

const CallStack: SlideProps = {
    children: (
        <>
            <Top><p>Call stack</p></Top>
            {/* <Code lang="js" code="
                function multiply(x, y) {
                    return x * y
                }

                function square(n) {
                    return multiply(n, n)
                }

                function printSquare(n) {
                    let square = square(n)
                    console.log(square)
                }

                printSquare()
            "/> */}
            <Code lang="js" code="
                function fourth() {}
            
                function third() { fourth() }

                function second() { third() }
                
                function first() { second() }
                
                first()
            "/>
            {/* <Code lang="js" code="                
                function foo() {
                    foo()
                }
                
                foo()
            "/> */}
            <div style={{ height: 10, width: 50 }}></div>
            <img height="400px" src={require('../public/call-stack.svg')}/>
        </>
    )
}

const Asynchronous: SlideProps = {
    children: (
        <>
            <Top><p>Asynchronous</p></Top>
            <Code lang="js" code="
                console.log('Start')

                setTimeout(() => {
                    console.log('timeout callback')
                }, 5000)

                console.log('End')
            "/>
            <div style={{ height: 10, width: 50 }}></div>
            <img height="400px" src={require('../public/async.svg')}/>
        </>
    )
}

const Microtasks: SlideProps = {
    children: (
        <>
            <Top><p>Microtasks</p></Top>
            <Code lang="js" code="
                console.log('Start')

                const getData = new Promise(...)

                setTimeout(() => {
                    console.log('timeout')
                }, 5000)

                getData.then((data) => {
                    console.log(data)
                })

                console.log('End')
            "/>
            <div style={{ height: 10, width: 50 }}></div>
            <img height="400px" src={require('../public/microtasks.svg')}/>
        </>
    )
}

const Priorities: SlideProps = {
    children: (
        <>
            <Top><p>Phase priorities</p></Top>
            <img width="800px" src={require('../public/priority.svg')}/>
            <div style={{ height: 10, width: 50 }}></div>
            <div>
                <p>Detail libuv:</p>
                <ul>
                    <li>timers</li>
                    <li>pending callbacks</li>
                    <li>idle, prepare</li>
                    <li>poll</li>
                    <li>check</li>
                    <li>close callbacks</li>
                </ul>
            </div>
        </>
    )
}

const ThreadPool: SlideProps = {
    children: (
        <>
            <Top><p>Thread pool</p></Top>
            <img width="1100px" src={require('../public/thread-pool.svg')}/>
        </>
    )
}

const CommonSystem: SlideProps = {
    children: (
        <>
            <Top><p>Common system</p></Top>
            <img src={require('../public/common.jpg')}/>
        </>
    )
}

const NodeFoundation: SlideProps = {
    children: (
        <>
            <Top><p>Node Foundation</p></Top>
        </>
    )
}

export {
    welcome, 
    plan, 
    creator, 
    nodejs, 
    preNonBlocking,
    quoteCreator, 
    blokingIO, 
    blokingIO_ex,
    nonBlockingIO, 
    nonBlockingIO_ex,
    preIotEx,
    multyThreadIot,
    pollingCycleIot, 
    eventLoopIot,
    preArchitecture,
    architecture, 
    v8, 
    libuv,
    preProcesses,
    CallStack,
    Asynchronous,
    Microtasks,
    Priorities,
    ThreadPool,
    CommonSystem,
    NodeFoundation
}
