import styled from 'styled-components'

const StyledUploadAvatar = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledUploadAvatarOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 1;
`

const StyledUploadAvatarWindow = styled.div`
    width: 400px;
    border-radius: 5px;
    background: #fff;
    z-index: 1;
    position: relative;
    padding: 20px;
`
const StyledUploadAvatarHeader = styled.header`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
const StyledUploadAvatarTitle = styled.div`
    font-size: 1.5rem;
`

const StyledUploadAvatarBody = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    StyledUploadAvatar,
    StyledUploadAvatarOverlay,
    StyledUploadAvatarWindow,
    StyledUploadAvatarHeader,
    StyledUploadAvatarTitle,
    StyledUploadAvatarBody,
}
