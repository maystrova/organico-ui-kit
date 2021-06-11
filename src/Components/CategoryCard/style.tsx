import styled from 'styled-components'

const StyledCategoryCard = styled.button`
    width: 100%;
    height: 130px;
    padding: 20px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    display: grid;
    grid-row-gap: 20px;
    outline: none;
    border: none;
    cursor: pointer;
`

const StyledCategoryCardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export { StyledCategoryCard, StyledCategoryCardImage }
