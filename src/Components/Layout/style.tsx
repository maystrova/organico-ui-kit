import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    letter-spacing: 0.1px;
}

*,
*:after,
*:before {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
}
`

const StyledLayout = styled.div`
    padding: 20px;
    background-color: ${props => props.theme.appBackground};
    color: ${props => props.theme.color};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`

const StyledSwitchMode = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    position: absolute;
    right: 50px;
`

export { StyledLayout, GlobalStyle, StyledSwitchMode }
