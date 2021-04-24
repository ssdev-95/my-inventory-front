import React, { useState, useEffect } from 'react'

import { useTheme } from '../../contexts/Theme'

import { Container, Thumb } from './styles'

export default function Switcher() {
    const { theme, toggleTheme } = useTheme()
    const [ posiX, setPosiX ] = useState('0')

    useEffect(()=>{
        theme==='light' ? setPosiX('0') : setPosiX('28px')
    }, [theme])

    return (
        <Container
          style={{background: theme==='light' ? '#009900' : 'red'}}
          onClick={toggleTheme}>
            <Thumb style={{left: posiX}}></Thumb>
        </Container>
    )
}