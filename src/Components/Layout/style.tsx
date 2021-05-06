import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    background-color: #fff;
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
`

export { StyledLayout, GlobalStyle }
