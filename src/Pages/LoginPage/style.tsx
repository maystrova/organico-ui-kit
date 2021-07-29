import styled from 'styled-components'

const StyledLogin = styled.div`
    padding: 30px 0;
    display: grid;
    grid-gap: 50px;
`

const StyledWrongPassword = styled.div`
    font-size: 12px;
    color: red;
`

const StyledPasswordActions = styled.div`
    & a {
        text-decoration: none;
        outline: none;
        font-size: 14px;
    }
`

export { StyledLogin, StyledWrongPassword, StyledPasswordActions }
