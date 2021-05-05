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
`

export { StyledIcon }
