import styled from 'styled-components'

const StyledProductCard = styled.div`
    height: 114px;
    max-width: 342px;
    padding: 20px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-column-gap: 20px;
`

const StyledProductCardIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledProductCardCount = styled.span`
    color: #92929d;
`

export { StyledProductCard, StyledProductCardIcon, StyledProductCardCount }
