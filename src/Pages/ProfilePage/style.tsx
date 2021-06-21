import styled from 'styled-components'

const StyledProfilePage = styled.div``

const StyledProfileInfo = styled.div`
    display: grid;
    grid-row-gap: 8px;
    margin: 40px 0;
`

const StyledUserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    & img {
        width: 170px;
        height: 170px;
        border-radius: 50%;
    }
`

const StyledUserName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledUserPhoneNumber = styled.div`
    color: rgba(146, 146, 157, 1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledProfileActions = styled.div`
    display: grid;
    grid-row-gap: 15px;
    margin-bottom: 100px;
`

export {
    StyledProfilePage,
    StyledProfileInfo,
    StyledUserAvatar,
    StyledUserName,
    StyledUserPhoneNumber,
    StyledProfileActions,
}
