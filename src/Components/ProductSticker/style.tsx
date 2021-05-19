import styled from 'styled-components'

const StyledProductSticker = styled.div`
    height: 114px;
    max-width: 342px;
    padding: 20px;
    border-radius: 12px;
    //display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    //grid-column-gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
