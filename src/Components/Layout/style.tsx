import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .LIGHT {
    background-color: white;
  }

  .DARK {
    background-color: #171725;
  }
  
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
    height: 150vh;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
`

const StyledSwitchMode = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
`

export { StyledLayout, GlobalStyle, StyledSwitchMode }
