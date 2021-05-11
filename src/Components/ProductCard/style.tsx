import styled from 'styled-components'

const StyledProductCard = styled.div`
    height: 114px;
    max-width: 342px;
    padding: 20px;
    border-radius: 12px;
    //display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    //grid-column-gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledProductCardInfo = styled.div`
    line-height: 24px;
`

const StyledProductCardIcon = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`
const StyledProductCardCount = styled.span`
    color: #92929d;
    font-size: 14px;
`

export {
    StyledProductCard,
    StyledProductCardIcon,
    StyledProductCardCount,
    StyledProductCardInfo,
}
