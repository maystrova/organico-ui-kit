import styled, { css } from 'styled-components'
import { ICON_SIZE } from './index'

interface StyledIconProps {
    size: ICON_SIZE
}

const StyledIcon = styled.img`
    display: block;

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.X_SMALL &&
        css`
            width: 6px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.SMALL &&
        css`
            width: 18px;
        `}
    
    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.MEDIUM &&
        css`
            width: 20px;
        `}
    
    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.LARGE &&
        css`
            width: 40px;
        `}
    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.X_LARGE &&
        css`
            width: 64px;
        `}
    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.XX_LARGE &&
        css`
            width: 72px;
        `}
    
     ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.XXX_LARGE &&
        css`
            width: 92px;
        `}
`

export { StyledIcon }
