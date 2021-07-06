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
`

export { StyledLayout, GlobalStyle }
