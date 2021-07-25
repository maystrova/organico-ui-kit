import styled from 'styled-components'

const StyledRegistration = styled.div`
    display: grid;
    grid-row-gap: 20px;
    margin-bottom: 50px;

    & p {
        margin: 40px 0;
        color: #92929d;
        font-size: 16px;
    }
`

const StyledRegistrationFields = styled.div`
    display: grid;
    grid-row-gap: 10px;
`

const StyledRegistrationTitle = styled.div`
    color: #696974;
`

const StyledRegistrationPasswordInfo = styled.span`
    color: red;
    font-size: 12px;
`

const StyledRegistrationField = styled.label`
    border: 1.5px solid #eaeaea;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 48px;

    & input {
        border: none;
        outline: none;
        width: 100%;
        background-color: ${props => props.theme.appBackground};
        color: ${props => props.theme.color};
    }

    & button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
`

const StyledRegistrationActions = styled.footer`
    display: grid;
    grid-row-gap: 24px;
    margin-bottom: 100px;

    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #92929d;
    }
`

const StyledAcceptTerms = styled.div`
    display: flex;
    align-items: center;

    & a {
        color: rgba(46, 204, 113, 1);
        text-decoration: none;
    }
`

const StyledCheckbox = styled.input`
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1.5px solid #92929d;
    margin-right: 12px;
`

export {
    StyledRegistration,
    StyledRegistrationTitle,
    StyledRegistrationFields,
    StyledRegistrationField,
    StyledRegistrationActions,
    StyledAcceptTerms,
    StyledCheckbox,
    StyledRegistrationPasswordInfo,
}
