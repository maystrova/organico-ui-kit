import styled from 'styled-components'

const StyledCategoriesPage = styled.div``

const StyledSearchHistory = styled.div`
    display: grid;
    grid-gap: 5px;
`

const StyledSearchHistoryItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const StyledHistoryIcon = styled.div`
    margin-right: 10px;
`

const StyledSearchHistoryAction = styled.div`
    margin-bottom: 20px;
`

export {
    StyledCategoriesPage,
    StyledSearchHistoryItem,
    StyledSearchHistory,
    StyledHistoryIcon,
    StyledSearchHistoryAction,
}
