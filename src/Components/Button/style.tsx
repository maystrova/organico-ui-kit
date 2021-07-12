import styled, { css } from 'styled-components'
import { BUTTON_TYPE } from './index'

export interface StyledButtonProps {
    selfType: BUTTON_TYPE
}

const StyledButton = styled.button`
    cursor: pointer;
    outline: none;
    border-radius: 100px;
    font-size: 16px;
    height: 52px;
    font-weight: 700;

    &:hover {
        opacity: 80%;
    }

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.PRIMARY &&
        css`
            color: #ffffff;
            border: none;
            background-color: rgba(46, 204, 113, 1);
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.WHITE &&
        css`
            color: #171725;
            border: 1px solid #92929d;
            background-color: rgba(46, 204, 113, 1);
        `}
`

export { StyledButton }
