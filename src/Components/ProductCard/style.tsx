import styled, { css } from 'styled-components'
import { PRODUCT_TYPE } from '../../services/products/products'

export interface StyledProductCardProps {
    type: PRODUCT_TYPE
}

const StyledProductCard = styled.div`
    min-height: 180px;
    padding: 16px;
    border-radius: 20px;
    display: grid;
    grid-row-gap: 20px;
    letter-spacing: 0.1px;

    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.BROCCOLI &&
        css`
            background-color: rgba(118, 178, 38, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.CARROT &&
        css`
            background-color: rgba(234, 129, 47, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.BANANA &&
        css`
            background-color: rgba(243, 162, 12, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.LETTUCE &&
        css`
            background-color: rgba(63, 125, 60, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.POTATO &&
        css`
            background-color: rgba(233, 176, 79, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.PAPRIKA &&
        css`
            background-color: rgba(227, 85, 63, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.RED_ONION &&
        css`
            background-color: rgba(151, 3, 29, 0.15);
        `}
    ${(props: StyledProductCardProps) =>
        props.type === PRODUCT_TYPE.DEFAULT &&
        css`
            background-color: #fff;
        `}
`

const StyledCardAction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledProductCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
`

export { StyledCardAction, StyledProductCard, StyledProductCardHeader }
