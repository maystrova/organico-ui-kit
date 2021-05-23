import styled from 'styled-components'

const StyledProductCard = styled.div`
    min-height: 180px;
    padding: 16px;
    border-radius: 20px;
    display: grid;
    grid-row-gap: 20px;
    letter-spacing: 0.1px;
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
