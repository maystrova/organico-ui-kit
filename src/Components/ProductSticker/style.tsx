import styled from 'styled-components'

const StyledProductSticker = styled.div`
    padding: 20px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 64px 1fr 120px;
    grid-gap: 20px;
`

const StyledProductStickerInfo = styled.div`
    line-height: 24px;
`

const StyledProductStickerIcon = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`
const StyledProductStickerCount = styled.span`
    color: #92929d;
    font-size: 14px;
`

export {
    StyledProductSticker,
    StyledProductStickerCount,
    StyledProductStickerIcon,
    StyledProductStickerInfo,
}
