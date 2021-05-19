import styled from 'styled-components'

const StyledWishlistPage = styled.div``

const StyledWishlistPageHeader = styled.header`
    height: 65px;
    display: flex;
    align-items: center;
`

const StyledWishlistPageCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 18px;
    grid-row-gap: 18px;
`

export { StyledWishlistPage, StyledWishlistPageHeader, StyledWishlistPageCards }
