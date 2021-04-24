import styled from 'styled-components'
import colors from '../../../colors.json'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${colors.halfWhite};

    background: linear-gradient(239.54deg, ${colors.softBlue} 0%, ${colors.softGray} 100%);
`

export const Main = styled.main`
    width: 100%;
    height:100%;
    padding: 2rem 4rem;

    form input {
        border: none;
        border-radius: 5px;

        background: ${colors.halfWhite};
        color: ${colors.halfBlack};

        width: 20vw;
        height: 4vh;

        padding: 0 .75rem;
    }
`
