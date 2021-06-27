import styled from 'styled-components'

const StyledEditProfile = styled.div`
    display: grid;
    grid-gap: 16px;
    margin-bottom: 100px;

    & input {
        width: 100%;
        height: 48px;
        border: 1.5px solid rgba(234, 234, 234, 1);
        border-radius: 100px;
        outline: none;
        padding: 13px;
        font-size: 16px;
    }

    & textarea {
        height: 127px;
        outline: none;
        border: 1.5px solid rgba(234, 234, 234, 1);
        border-radius: 16px;
        padding: 10px 16px;
        resize: none;
        font-size: 16px;
    }
`

const StyledEditProfileTitle = styled.div`
    color: rgba(105, 105, 116, 1);
`

const StyledEditProfileFooter = styled.footer`
    margin-bottom: 50px;
`

export { StyledEditProfile, StyledEditProfileTitle, StyledEditProfileFooter }
