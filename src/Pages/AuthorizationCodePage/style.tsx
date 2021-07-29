import styled from 'styled-components'

const StyledAuthorizationCodePage = styled.div`
    display: grid;
    grid-gap: 50px;
`

const StyledAuthorizationCode = styled.div`
    display: grid;
    grid-gap: 20px;

    & h3 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }
`

const StyledSentSms = styled.span`
    color: #92929d;
    font-size: 16px;
`

const StyledResendCode = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & button {
        color: #2ecc71;
        text-decoration: none;
        border: none;
        outline: none;
        cursor: pointer;
        background: transparent;
    }
`

export {
    StyledAuthorizationCodePage,
    StyledAuthorizationCode,
    StyledSentSms,
    StyledResendCode,
}
