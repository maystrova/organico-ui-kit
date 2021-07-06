import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Link } from 'react-router-dom'

import {
    StyledProfileActionIcon,
    StyledProfileActionInfo,
    StyledProfileActionSticker,
    StyledProfileAction,
} from './style'

import further from 'Components/ProfileActionSticker/pics/further.svg'

export interface ProfileActionsType {
    icon: string
    title: string
    path: string
}

const ProfileActionSticker = ({ icon, title, path }: ProfileActionsType) => {
    return (
        <StyledProfileAction>
            <Link to={path}>
                <StyledProfileActionSticker>
                    <StyledProfileActionInfo>
                        <StyledProfileActionIcon>
                            <Icon size={ICON_SIZE.MEDIUM} src={icon} />
                        </StyledProfileActionIcon>
                        <span>{title}</span>
                    </StyledProfileActionInfo>
                    <Icon size={ICON_SIZE.X_SMALL} src={further} />
                </StyledProfileActionSticker>
            </Link>
        </StyledProfileAction>
    )
}

export { ProfileActionSticker }
