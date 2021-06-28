import React, { useContext, useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ACTION } from 'context/actions'
import { UserType } from 'services/user'
import { OrganicContext } from 'context/storeContext'

import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledHeader } from 'Pages/ProductPage/style'
import {
    StyledEditProfile,
    StyledEditProfileFooter,
    StyledEditProfileTitle,
} from './style'
import { StyledProfileInfo, StyledUserAvatar } from 'Pages/ProfilePage/style'

const EditProfilePage = ({}) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [editProfile, setEditProfile] = useState<UserType>(store.profile)

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
                        value={`${editProfile.name}`}
                        onChange={event =>
                            setEditProfile({
                                ...editProfile,
                                name: event.target.value,
                            })
                        }
                    />
                    <StyledEditProfileTitle>Phone</StyledEditProfileTitle>
                    <input
                        type='text'
                        value={editProfile.phoneNumber}
                        onChange={event =>
                            setEditProfile({
                                ...editProfile,
                                phoneNumber: Number(event.target.value),
                            })
                        }
                    />
                    <StyledEditProfileTitle>Address</StyledEditProfileTitle>
                    <textarea
                        value={editProfile.address}
                        onChange={event =>
                            setEditProfile({
                                ...editProfile,
                                address: event.target.value,
                            })
                        }
                    />
                </StyledEditProfile>
                <StyledEditProfileFooter>
                    <Button
                        width={'100%'}
                        title={'Save'}
                        type={BUTTON_TYPE.PRIMARY}
                        onClick={() =>
                            dispatch({
                                action: ACTION.USER_UPDATE,
                                data: editProfile,
                            })
                        }
                    />
                </StyledEditProfileFooter>
            </StyledProfileInfo>
        </div>
    )
}

export { EditProfilePage }
