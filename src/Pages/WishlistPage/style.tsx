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
    grid-gap: 18px;
    margin-bottom: 100px;

    a {
        text-decoration: none;
        color: black;
    }
`

const StyledEmptySpace = styled.div`
    font-size: 50px;
    color: grey;
`

export {
    StyledWishlistPage,
    StyledTitledHeader,
    StyledCardsList,
    StyledEmptySpace,
}
