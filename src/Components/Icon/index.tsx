import React from 'react'

import { StyledIcon } from './style'

export enum ICON_SIZE {
    X_SMALL = 'x-small',
    XX_SMALL = 'xx-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    X_LARGE = 'x-large',
    XX_LARGE = 'xx-large',
    XXX_LARGE = 'xxx-large',
    X_MEDIUM = 'x-medium',
}

interface IconProps {
    size: ICON_SIZE
    alt?: string
    src: string
}

const Icon = ({ size, alt = 'icon', src }: IconProps) => {
    return <StyledIcon size={size} alt={alt} src={src} />
}

export { Icon }
