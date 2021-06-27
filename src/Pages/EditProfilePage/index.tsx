import React, { useContext, useState } from 'react'
import { StyledHeader } from 'Pages/ProductPage/style'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledEditProfile,
    StyledEditProfileTitle,
    StyledEditProfileFooter,
} from './style'
import { StyledProfileInfo, StyledUserAvatar } from 'Pages/ProfilePage/style'
import { OrganicContext, StoreType } from 'context/storeContext'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { DEFAULT_USER, UserType } from 'services/user'

export interface EditProfilePageType {
    profileName: string
    profilePhone: number
    profileAddress: string
}

const onProfileEdit = (profile: EditProfilePageType) => {
    const newProfile: UserType = {
        ...DEFAULT_USER,
        name: profile.profileName,
        phoneNumber: Number(profile.profileName),
        address: profile.profileAddress,
    }
    return newProfile
}

const EditProfilePage = ({}) => {
    const { store } = useContext(OrganicContext)
    const [editProfile, setEditProfile] = useState<EditProfilePageType>({
        profileName: `${store.profile.name} ${store.profile.surname}`,
        profilePhone: store.profile.phoneNumber,
        profileAddress: store.profile.address,
    })

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
                    <input
                        type='text'
                        value={editProfile.profileName}
                        onChange={event =>
                            setEditProfile({
                                profileName: event.target.value,
                                profilePhone: store.profile.phoneNumber,
                                profileAddress: store.profile.address,
                            })
                        }
                    />
                    <StyledEditProfileTitle>Phone</StyledEditProfileTitle>
                    <input
                        type='text'
                        value={editProfile.profilePhone}
                        onChange={event =>
                            setEditProfile({
                                profileName: `${store.profile.name} ${store.profile.surname}`,
                                profilePhone: Number(event.target.value),
                                profileAddress: store.profile.address,
                            })
                        }
                    />
                    <StyledEditProfileTitle>Address</StyledEditProfileTitle>
                    <textarea
                        value={editProfile.profileAddress}
                        onChange={event =>
                            setEditProfile({
                                profileName: `${store.profile.name} ${store.profile.surname}`,
                                profilePhone: store.profile.phoneNumber,
                                profileAddress: event.target.value,
                            })
                        }
                    />
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
