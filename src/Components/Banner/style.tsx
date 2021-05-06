import styled, { css } from 'styled-components'

const StyledBanner = styled.div`
    display: flex;
    align-items: center;
`

const StyledBannerIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`

const StyledBannerInfo = styled.div`
    line-height: 24px;
    letter-spacing: 0.1px;
    font-weight: 100;
`

const StyledBannerTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
`

const StyledBannerSubtitle = styled.span`
    color: #92929d;
`

export {
    StyledBanner,
    StyledBannerIcon,
    StyledBannerInfo,
    StyledBannerTitle,
    StyledBannerSubtitle,
}
