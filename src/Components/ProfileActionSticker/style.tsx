import styled from 'styled-components'

const StyledProfileActionSticker = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledProfileActionIcon = styled.div`
    width: 44px;
    height: 44px;
    background-color: rgba(46, 204, 113, 1);
    padding: 6px;
    border-radius: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledProfileActionInfo = styled.div`
    display: flex;
    align-items: center;
`

export {
    StyledProfileActionSticker,
    StyledProfileActionIcon,
    StyledProfileActionInfo,
}
