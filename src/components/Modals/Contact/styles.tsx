import styled from 'styled-components'
import colors from '@/styles/colors.json'

const filtro = 'invert(.5) sepia(1) saturate(30) hue-rotate(345deg)'

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
    position: relative;
    width: 35rem;
    height: 25rem;
    max-width: 90%;

    border-radius: 24px;

    background: ${colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    padding: 2.5rem 8rem;

    button {
        position: absolute;
        height: 45px;
        background: rgba(0, 0, 0, 0);
        border: none;

        top: 1rem;
        left: 1rem;
        font-size: 0;

        img {
            transform: rotate(45deg);
            height: 45px;
            filter: invert(100%);

            &:hover {
                filter: ${filtro};
            }
        }
    }

    span {
        font-size: 2rem;
        font-weight: 500;
        color: ${colors.halfBlack};
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;

        img {
            height: 50px;

            &:hover {
                filter:  ${filtro};
            }
        }
    }

    @media(max-width:800px) {
        padding: 2rem 4rem;

        span {
            font-size: 1.85rem;
        }

        div { 
            gap: 2.5rem;
        }
    }
`
