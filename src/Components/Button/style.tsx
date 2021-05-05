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
        props.selfType === BUTTON_TYPE.ADD_TO_CART &&
        css`
            color: white;
            height: 52px;
            border-radius: 100px;
            background-color: rgba(46, 204, 113, 1);
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.ADD_TO_WISHLIST &&
        css`
            background-image: url(${wish});
            background-repeat: no-repeat;
            width: 20px;
            height: 20px;
            background-color: transparent;
        `}

        ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.BACK_TO_PREVIOUS_PAGE &&
        css`
            background-image: url(${back});
            background-repeat: no-repeat;
            width: 15px;
            height: 15px;
            background-color: transparent;
        `}
`

export { StyledButton }
