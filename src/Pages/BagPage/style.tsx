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
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    & span {
        margin-right: 10px;
    }
`

const StyledBag = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-bottom: 20px;
`

const StyledBagPageUserInfo = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-bottom: 100px;
`

const StyledBagPageInfoWrapper = styled.div`
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(234, 234, 234, 1);
`

const StyledBagPageAddress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    & span {
        font-size: 14px;
        color: rgba(146, 146, 157, 1);
    }
    & button {
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
    }
`

const StyledBagPageNote = styled.textarea`
    resize: none;
    border-radius: 12px;
    border: 1px solid rgba(234, 234, 234, 1);
    padding: 10px;
    height: 100px;
    outline: none;
`

const StyledBagPageFooter = styled.footer``

const StyledBagPageFooterPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledBagPageTotal = styled.div`
    color: rgba(146, 146, 157, 1);
    line-height: 2.5;
    margin-bottom: 20px;

    & > *:last-child {
        color: ${props => props.theme.color};
    }
`

const StyledEditAddress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & textarea {
        border: 1px solid rgba(234, 234, 234, 1);
        border-radius: 10px;
        resize: none;
        outline: none;
        margin-right: 10px;
    }
    & button {
        height: 30px;
        background: rgba(46, 204, 113, 1);
        color: white;
        border-radius: 5px;
    }
`

export {
    StyledBagPage,
    StyledBagAction,
    StyledBag,
    StyledBagPageUserInfo,
    StyledBagPageInfoWrapper,
    StyledBagPageAddress,
    StyledBagPageNote,
    StyledBagPageFooter,
    StyledBagPageFooterPrice,
    StyledBagPageTotal,
    StyledEditAddress,
}
