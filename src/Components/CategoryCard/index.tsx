import React from 'react'

import { CategoryType } from './types'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledCategoryCard } from './style'

interface CategoryCardProps extends CategoryType {}

const CategoryCard = ({ title, icon, backgroundColor }: CategoryType) => {
    return (
        <StyledCategoryCard style={{ backgroundColor: backgroundColor }}>
            <Icon size={ICON_SIZE.XX_LARGE} src={icon} />
            <span>{title}</span>
        </StyledCategoryCard>
    )
}

export { CategoryCard }