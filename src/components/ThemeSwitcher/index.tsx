import React, { useState, useEffect } from 'react'

import { useTheme } from '@/contexts/Theme'

import { Container, Thumb } from '@/components/ThemeSwitcher/styles'
import colors from '@/styles/colors.json'

export default function Switcher() {
    const { theme, toggleTheme } = useTheme()
    const [ posiX, setPosiX ] = useState('0')

    useEffect(()=>{
        theme==='light' ? setPosiX('0') : setPosiX('28px')
    }, [theme])

    return (
        <Container
          style={{background: theme==='light' ? colors.green : colors.darkGreen}}
          onClick={toggleTheme}>
            <Thumb style={{left: posiX}}></Thumb>
        </Container>
    )
}