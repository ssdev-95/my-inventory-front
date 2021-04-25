import styled from 'styled-components'
import colors from '../../../colors.json'

export const Navbar = styled.nav`
    width: 100%;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: .5rem 1.75rem;
    border-bottom: 1px solid ${colors.halfWhite};

    position: relative;

    img {
        filter: invert(100%);
    }

    @media(max-width:800px) {
        justify-content: flex-start;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 3rem;
    list-style: none;
    justify-content: center;
    align-items: center;

    li {
        text-transform: uppercase;
        color: ${colors.halfWhite};
        padding: .5rem;

        a {
            text-decoration: none;
            color: ${colors.halfWhite};
        }

        &:hover {
            font-weight: 600;
            filter: invert(100%);
            border-bottom: 2px solid ${colors.halfWhite};
        }
    }

    @media(max-width:800px) {
        background: ${colors.white};
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 1rem;
        padding: 1.5rem 2rem;

        position: absolute;
        right:0;

        height: 175px;
        width: 70%;

        z-index: 5;

        border-radius: 0 0 0 100%;
        transition: top .3s ease;
        
        li {
            color: ${colors.halfBlack};
            z-index: 10;
            cursor: pointer;
            
            &:hover {
                    color: ${colors.halfBlack};
                    font-weight: 600;
                    filter: invert(0);
                 }
            a {
                color: ${colors.halfBlack};
            }
        }
    }
`
