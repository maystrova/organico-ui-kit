import React from 'react'
import { Icon, ICON_SIZE } from '../Icon'
import { StyledBanner, StyledBannerIcon, StyledBannerInfo } from './style'

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
                <h3>{title}</h3>
                <span>{subtitle}</span>
            </StyledBannerInfo>
        </StyledBanner>
    )
}

export { Banner }
