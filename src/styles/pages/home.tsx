import styled from 'styled-components'
import colors from '../../../colors.json'

export const Container = styled.html`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    background: linear-gradient(239.54deg, ${colors.softBlue} 0%, ${colors.softGray} 100%);
`

export const Footer = styled.footer`
    width: 100%;
    height: 8vh;

    display: flex;
    align-items: center;
    justify-content: center;
`
