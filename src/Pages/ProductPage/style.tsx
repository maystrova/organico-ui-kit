import styled from 'styled-components'

const StyledProductPage = styled.div`
    display: grid;
    grid-row-gap: 30px;
`

const StyledHeader = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledProductPageMain = styled.div`
    display: grid;
    grid-row-gap: 15px;
`
const StyledProductPagePicture = styled.div`
    display: flex;
    justify-content: center;
    & img {
        width: 70%;
    }
`

const StyledProductPageInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledProductTitles = styled.div`
    display: grid;
    grid-row-gap: 10px;
`

const StyledProductShop = styled.div`
    color: #92929d;
`

const StyledProductFooter = styled.div`
    display: grid;
    grid-row-gap: 30px;
`

const StyledProductDetails = styled.div`
    display: grid;
    grid-row-gap: 10px;
    line-height: 21px;
    font-size: 16px;
    letter-spacing: 0.1px;

    & p {
        color: #92929d;
    }
`

const StyledProductAddToCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 52px;
    grid-gap: 24px;
`

const StyledChatButton = styled.button`
    width: 52px;
    height: 52px;
    border: none;
    border-radius: 50%;
    padding: 8px;
    background-color: rgba(241, 241, 245, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export {
    StyledProductPage,
    StyledHeader,
    StyledProductPageMain,
    StyledProductPagePicture,
    StyledProductShop,
    StyledProductFooter,
    StyledProductDetails,
    StyledChatButton,
    StyledProductAddToCard,
    StyledProductPageInfo,
    StyledProductTitles,
}
