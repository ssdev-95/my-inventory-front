import styled from 'styled-components'
import colors from '../../../../colors.json'
//lmao
export const Overlay = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${colors.halfBlack};

    z-index: 15;
`

export const Modal = styled.div`
    width: 35rem;
    height: 25rem;

    border-radius: 24px;

    background: ${colors.white};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    padding: 4rem 3rem;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input {
            height: 2rem;
            background: rgba(0, 0, 0, .2);
            border-radius: 8px;
            border: none;
            color: ${colors.white};
            padding: 0 1rem;
        }
    }
`

export const Actions = styled.div`
    width: 100%;
    display: flex;

    justify-content: space-evenly;

    button {
        padding: .75rem 3rem;
        border: none;
        border-radius: 8px;
        color: ${colors.white};

        &:hover {
            filter: brightness(.8);
        }
    }
`
