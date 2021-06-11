import styled from 'styled-components'

const StyledCategoryCard = styled.div`
    width: 100%;
    height: 130px;
    padding: 20px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    display: grid;
    grid-row-gap: 20px;
    cursor: pointer;
`

const StyledCategoryCardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledCategoryCardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export { StyledCategoryCard, StyledCategoryCardImage, StyledCategoryCardTitle }
