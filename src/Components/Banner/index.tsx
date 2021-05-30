import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledBanner,
    StyledBannerIcon,
    StyledBannerInfo,
    StyledBannerTitle,
    StyledBannerSubtitle,
} from './style'

interface BannerProps {
    title: string
    icon: string
    subtitle: string
    backgroundColor?: string
    iconBackgroundColor?: string
}

const Banner = ({
    title,
    icon,
    subtitle,
    backgroundColor,
    iconBackgroundColor = 'rgba(46, 204, 113, 0.15)',
}: BannerProps) => {
    return (
        <StyledBanner style={{ backgroundColor: backgroundColor }}>
            <StyledBannerIcon style={{ backgroundColor: iconBackgroundColor }}>
                <Icon size={ICON_SIZE.MEDIUM} src={icon} />
            </StyledBannerIcon>
            <StyledBannerInfo>
                <StyledBannerTitle>{title}</StyledBannerTitle>
                <StyledBannerSubtitle>{subtitle}</StyledBannerSubtitle>
            </StyledBannerInfo>
        </StyledBanner>
    )
}

export { Banner }
