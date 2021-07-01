import styled from 'styled-components'

const StyledCartPage = styled.div``

const StyledCartPageInfo = styled.div`
    border: 1px solid rgba(234, 234, 234, 1);
    border-radius: 12px;
    padding: 20px;
    display: grid;
    grid-row-gap: 20px;
    margin-bottom: 50px;
`

const StyledCardPageShop = styled.div`
    display: flex;
    align-items: center;
`
const StyledCardPageShopIcon = styled.div`
    margin-right: 16px;
`

const StyledCartPageFooter = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 40px;
    height: 150px;
    align-items: center;
`

const StyledCartPageTotal = styled.div`
    line-height: 1.5;
    & span {
        color: #92929d;
    }
`

export {
    StyledCartPage,
    StyledCartPageInfo,
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPageFooter,
    StyledCartPageTotal,
}
