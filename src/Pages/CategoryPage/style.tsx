import styled from 'styled-components'

const StyledCategoryPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    overflow: scroll;
    margin-bottom: 100px;

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme.color};
    }
`

export { StyledCategoryPage }
