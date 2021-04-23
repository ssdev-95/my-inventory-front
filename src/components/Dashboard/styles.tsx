import React from 'react'
import styled from 'styled-components'
import colors from '../../../colors.json'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    gap: 5rem;

    padding: 3rem 2rem;

    button {
        background: ${colors.halfBlack};
        color: ${colors.halfWhite};
        font-size: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 45px;
        width: 45px;

        position: absolute;
        left: 5vw;
        top: 12vh;

        border: 0;
        border-radius: 50px;
        transition: filter .2s ease;

        img {
            height: 150%;
            width: 150%;
        }

        &:hover {
            filter: invert(100%);
        }
    }
    
    @media(max-width: 1024px) {
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
        justify-content: flex-start;

        button {
            height: 25px;
            width: 25px;

        }
    }
`

export const Table = styled.table`
    border-spacing: 0;
    max-width: 70%;
    max-height: 90%;
    overflow-y: scroll;

    color: ${colors.halfWhite};
    text-align: left;

    tbody tr td:last-child {
        text-align: center;
    }

    thead tr th,
    tbody tr td {
        border-bottom: 1px solid ${colors.halfWhite};
        padding: .25rem;
    }

    img {
        filter: invert(100%);
        cursor: pointer;
    }

    &.deleteButton img {
        filter: invert(100%);
    }

    tbody tr:hover {
        filter: invert(100%);
    }

    @media(max-width: 1024px) {
        max-width: 90%;
        width: 70vw;
        max-height: 85%;
    }

    @media(max-width: 400px) {
        font-size: 71.5%;
    }
`