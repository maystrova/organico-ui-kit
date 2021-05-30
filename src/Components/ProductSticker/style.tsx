import styled, { css } from 'styled-components'
import { PRODUCT_TYPE } from 'services/products/products'

export interface StyledProductStickerProps {
    type: PRODUCT_TYPE
}

const StyledProductSticker = styled.div`
    padding: 20px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 64px 1fr 120px;
    grid-gap: 20px;

    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.BROCCOLI &&
        css`
            background-color: rgba(118, 178, 38, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.CARROT &&
        css`
            background-color: rgba(234, 129, 47, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.BANANA &&
        css`
            background-color: rgba(243, 162, 12, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.LETTUCE &&
        css`
            background-color: rgba(63, 125, 60, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.POTATO &&
        css`
            background-color: rgba(233, 176, 79, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.PAPRIKA &&
        css`
            background-color: rgba(227, 85, 63, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.RED_ONION &&
        css`
            background-color: rgba(151, 3, 29, 0.15);
        `}
    ${(props: StyledProductStickerProps) =>
        props.type === PRODUCT_TYPE.DEFAULT &&
        css`
            background-color: #fff;
        `}
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
