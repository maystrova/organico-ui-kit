import styled from 'styled-components'

const StyledAddToWishlist = styled.button`
    border: none;
    width: 36px;
    height: 36px;
    outline: none;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        fill: ${props => props.theme.appBackground} !important;
        stroke: ${props => props.theme.color} !important;
        & path {
            fill: ${props => props.theme.appBackground} !important;
        }
    }
`

export { StyledAddToWishlist }
