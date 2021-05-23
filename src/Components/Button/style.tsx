import styled, { css } from 'styled-components'
import { BUTTON_TYPE } from './index'
import back from './pics/back.svg'
import wish from './pics/wishlist.svg'

export interface StyledButtonProps {
    selfType: BUTTON_TYPE
}

const StyledButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    color: #ffffff;

    &:hover {
        opacity: 80%;
    }

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.ADD_ITEM && css``}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.REMOVE_ITEM && css``}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.PRIMARY &&
        css`
            color: white;
            height: 52px;
            font-size: 16px;
            font-weight: 700;
            border-radius: 100px;
            background-color: rgba(46, 204, 113, 1);
        `}
`

export { StyledButton }
