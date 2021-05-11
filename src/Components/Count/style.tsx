import styled from 'styled-components'

const StyledCount = styled.div`
    //display: flex;
    //justify-content: space-between;
    //align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
`

const StyledCountNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
`

const StyledCountButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledCountButton = styled.button`
    cursor: pointer;
    border: none;
    width: 40px;
    height: 40px;
    background-color: rgba(46, 204, 113, 1);
    padding: 8px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    StyledCount,
    StyledCountButton,
    StyledCountNumber,
    StyledCountButtonArea,
}
