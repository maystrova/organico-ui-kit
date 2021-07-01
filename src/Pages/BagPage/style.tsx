import styled from 'styled-components'

const StyledBagPage = styled.div`
    display: grid;
    grid-gap: 10px;
    & a {
        text-decoration: none;
    }
`

const StyledBagAction = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(46, 204, 113, 1);
    box-shadow: rgba(255, 186, 0, 0.2);
    height: 52px;
    border-radius: 100px;
    color: rgba(46, 204, 113, 1);
    margin-right: 14px;
    font-size: 16px;
    cursor: pointer;
    & span {
        margin-right: 10px;
    }
`

export { StyledBagPage, StyledBagAction }
