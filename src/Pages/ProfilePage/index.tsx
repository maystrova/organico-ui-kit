import React from 'react'
import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledProfileInfo,
    StyledProfilePage,
    StyledUserAvatar,
    StyledUserPhoneNumber,
    StyledUserName,
} from './style'
import { StyledHeader } from 'Pages/ProductPage/style'

import notification from 'Pages/ProfilePage/pics/Notification.svg'
import Vasya from 'Pages/ProfilePage/pics/Vasya-avatar.jpg'
import { UserType } from './user'

interface ProfilePageProps {}

export const DEFAULT_USER: UserType = {
    name: 'Vasya',
    surname: 'Cat',
    phoneNumber: 92341352,
    avatar: Vasya,
}

const ProfilePage = ({}: ProfilePageProps) => {
    return (
        <StyledProfilePage>
            <StyledHeader>
                <span>Profile</span>
                <Icon size={ICON_SIZE.XX_SMALL} src={notification} />
            </StyledHeader>
            <StyledProfileInfo>
                <StyledUserAvatar>
                    <img src={DEFAULT_USER.avatar} alt='Avatar' />
                </StyledUserAvatar>
                <StyledUserName>
                    <span>
                        {DEFAULT_USER.name} {DEFAULT_USER.surname}
                    </span>
                </StyledUserName>
                <StyledUserPhoneNumber>
                    <span>{DEFAULT_USER.phoneNumber}</span>{' '}
                </StyledUserPhoneNumber>
            </StyledProfileInfo>
        </StyledProfilePage>
    )
}

export { ProfilePage }
