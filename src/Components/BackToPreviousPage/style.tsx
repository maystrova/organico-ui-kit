import styled from 'styled-components'

const StyledBackToPreviousPage = styled.button`
    width: 52px;
    height: 52px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    & svg {
        fill: ${props => props.theme.color} !important;
        & path {
            fill: ${props => props.theme.color} !important;
        }
    }
`

export { StyledBackToPreviousPage }
