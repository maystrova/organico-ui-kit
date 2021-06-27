import React, { useContext } from 'react'
import { StyledHeader } from 'Pages/ProductPage/style'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledEditProfile,
    StyledEditProfileTitle,
    StyledEditProfileFooter,
} from './style'
import { StyledProfileInfo, StyledUserAvatar } from 'Pages/ProfilePage/style'
import { OrganicContext } from 'context/storeContext'
import { Button, BUTTON_TYPE } from 'Components/Button'

interface EditProfilePageProps {}

const EditProfilePage = ({}: EditProfilePageProps) => {
    const { store } = useContext(OrganicContext)
    return (
        <div>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <h4>Edit Profile</h4>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledProfileInfo>
                <StyledUserAvatar>
                    <img src={store.profile.avatar} alt='avatar' />
                </StyledUserAvatar>
                <StyledEditProfile>
                    <StyledEditProfileTitle>Name</StyledEditProfileTitle>
                    <input type='text' value={store.profile.name} />
                    <StyledEditProfileTitle>Phone</StyledEditProfileTitle>
                    <input type='text' value={store.profile.phoneNumber} />
                    <StyledEditProfileTitle>Address</StyledEditProfileTitle>
                    <textarea value={store.profile.address} />
                </StyledEditProfile>
                <StyledEditProfileFooter>
                    <Button
                        width={'100%'}
                        title={'Save'}
                        type={BUTTON_TYPE.PRIMARY}
                        onClick={() => {}}
                    />
                </StyledEditProfileFooter>
            </StyledProfileInfo>
        </div>
    )
}

export { EditProfilePage }
