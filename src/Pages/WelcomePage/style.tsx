import styled from 'styled-components'

const StyledWelcomeIllustration = styled.img`
    width: 350px;
`

const StyledWelcomePage = styled.div`
    display: grid;
    grid-gap: 40px;
`

const StyledWelcomePageInfo = styled.div`
    display: grid;
    grid-gap: 15px;

    & span {
        font-size: 16px;
        color: #92929d;
    }
`

const StyledWelcomePageAction = styled.div`
    margin-bottom: 100px;
`

const StyledPasswordIcon = styled.div`
    margin-right: 20px;
`

export {
    StyledWelcomeIllustration,
    StyledWelcomePage,
    StyledWelcomePageInfo,
    StyledWelcomePageAction,
    StyledPasswordIcon,
}
