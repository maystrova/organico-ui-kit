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

const StyledEditUserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
`

const StyledEditProfileAvatar = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
`

const StyledEditAvatar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(46, 204, 113, 1);
    position: absolute;
    bottom: -30px;
`

const StyledEditProfileTitle = styled.div`
    color: rgba(105, 105, 116, 1);
`

const StyledEditProfileFooter = styled.footer`
    margin-bottom: 50px;
`

export {
    StyledEditProfile,
    StyledEditProfileTitle,
    StyledEditProfileFooter,
    StyledEditAvatar,
    StyledEditProfileAvatar,
    StyledEditUserAvatar,
}
