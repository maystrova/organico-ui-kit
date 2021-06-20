import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledProfileActionIcon,
    StyledProfileActionInfo,
    StyledProfileActionSticker,
} from './style'

import further from 'Components/ProfileActionSticker/pics/further.svg'

export interface ProfileActionsType {
    icon: string
    title: string
    onButtonClick: () => void
}

const ProfileActionSticker = ({
    icon,
    title,
    onButtonClick,
}: ProfileActionsType) => {
    return (
        <StyledProfileActionSticker>
            <StyledProfileActionInfo>
                <StyledProfileActionIcon>
                    <Icon size={ICON_SIZE.X_SMALL} src={icon} />
                </StyledProfileActionIcon>
                <span>{title}</span>
            </StyledProfileActionInfo>
            <button onClick={onButtonClick}>
                <Icon size={ICON_SIZE.X_SMALL} src={further} />
            </button>
        </StyledProfileActionSticker>
    )
}

export { ProfileActionSticker }
