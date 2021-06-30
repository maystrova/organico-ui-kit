import React, { useContext, useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { UploadAvatar } from 'Components/UploadAvatar'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { ACTION } from 'context/actions'
import { UserType } from 'services/user'
import { OrganicContext } from 'context/storeContext'

import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledHeader } from 'Pages/ProductPage/style'
import {
    StyledEditAvatar,
    StyledEditProfile,
    StyledEditProfileAvatar,
    StyledEditProfileFooter,
    StyledEditProfileTitle,
    StyledEditUserAvatar,
} from './style'
import { StyledProfileInfo } from 'Pages/ProfilePage/style'

import editAvatar from 'Pages/EditProfilePage/pics/edit-avatar.svg'

const EditProfilePage = ({}) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [editProfile, setEditProfile] = useState<UserType>(store.profile)
    const [isShowUploadAvatar, setShowUploadAvatar] = useState<boolean>(false)
    const [saveButton, setSaveButton] = useState<string>('Save')

    return (
        <div>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <h4>Edit Profile</h4>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledProfileInfo>
                <StyledEditUserAvatar>
                    <StyledEditProfileAvatar
                        src={store.profile.avatar}
                        alt='avatar'
                    />
                    <StyledEditAvatar onClick={() => setShowUploadAvatar(true)}>
                        <Icon size={ICON_SIZE.MEDIUM} src={editAvatar} />
                    </StyledEditAvatar>
                </StyledEditUserAvatar>
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
                        title={saveButton}
                        type={BUTTON_TYPE.PRIMARY}
                        onClick={() => {
                            dispatch({
                                action: ACTION.USER_UPDATE,
                                data: editProfile,
                            })
                            setSaveButton('Successfully saved!')
                        }}
                    />
                </StyledEditProfileFooter>
            </StyledProfileInfo>
            <UploadAvatar
                onClick={() => {}}
                onAvatarUpload={() => {}}
                isOpen={isShowUploadAvatar}
                onCancel={() => setShowUploadAvatar(false)}
            />
        </div>
    )
}

export { EditProfilePage }
