import styled from 'styled-components'

const StyledWishlistPage = styled.div``

const StyledTitledHeader = styled.header`
    height: 65px;
    display: flex;
    align-items: center;
`

const StyledCardsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 18px;
    grid-row-gap: 18px;
`

export { StyledWishlistPage, StyledTitledHeader, StyledCardsList }
