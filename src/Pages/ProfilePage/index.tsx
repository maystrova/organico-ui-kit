import React from 'react'
import { Icon, ICON_SIZE } from 'Components/Icon'
import {
    ProfileActionSticker,
    ProfileActionsType,
} from '../../Components/ProfileActionSticker'

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
import editProfile from 'Components/ProfileActionSticker/pics/edit-profile.svg'
import myOrders from 'Components/ProfileActionSticker/pics/my-orders.svg'
import myWishlist from 'Components/ProfileActionSticker/pics/my-wishlist.svg'
import myAddress from 'Components/ProfileActionSticker/pics/my-address.svg'
import paymentMethod from 'Components/ProfileActionSticker/pics/payment-method.svg'
import customerService from 'Components/ProfileActionSticker/pics/customer-service.svg'
import changePassword from 'Components/ProfileActionSticker/pics/change-password.svg'
import logout from 'Components/ProfileActionSticker/pics/logout.svg'
import { StyledProfileActionSticker } from '../../Components/ProfileActionSticker/style'

export const DEFAULT_USER: UserType = {
    name: 'Vasya',
    surname: 'Cat',
    phoneNumber: 92341352,
    avatar: Vasya,
}

const PROFILE_ACTIONS: ProfileActionsType[] = [
    { title: 'Edit Profile', icon: editProfile, onButtonClick: () => {} },
    { title: 'My Orders', icon: myOrders, onButtonClick: () => {} },
    { title: 'My Wishlist', icon: myWishlist, onButtonClick: () => {} },
    { title: 'My Address', icon: myAddress, onButtonClick: () => {} },
    { title: 'Payment Method', icon: paymentMethod, onButtonClick: () => {} },
    {
        title: 'Customer Service',
        icon: customerService,
        onButtonClick: () => {},
    },
    { title: 'Change Password', icon: changePassword, onButtonClick: () => {} },
    { title: 'Logout', icon: logout, onButtonClick: () => {} },
]

const actions: ProfileActionsType[] = PROFILE_ACTIONS

const ProfilePage = ({}) => {
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
            {PROFILE_ACTIONS.map(action => (
                <ProfileActionSticker
                    icon={action.icon}
                    title={action.title}
                    onButtonClick={action.onButtonClick}
                    key={action.title}
                />
            ))}
        </StyledProfilePage>
    )
}

export { ProfilePage }
