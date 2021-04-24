import styled from 'styled-components'

export const Container = styled.div`
    height: 14px;
    width: 48px;

    border-radius: 24px;
    position: relative;
`

export const Thumb = styled.div`
    position: absolute;
    top: -4px;

    height: 20px;
    width: 20px;
    border-radius: 50px;

    background: #f0f2f5;

    transition: left .2s ease;
`
