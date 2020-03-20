import React from 'react'
import styled from 'styled-components'

const Header = () => <Title><h1>Weather Forecast</h1></Title>

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #FFF;
        font-family: arial;
        font-size: 70px;
    }
`

export default Header