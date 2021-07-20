import React, { useContext, useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { UploadAvatar } from 'Components/UploadAvatar'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { ACTION } from 'context/actions'
import { User } from 'services/user'
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
import firebase from 'firebase'
import { storage } from 'services/firebase'

interface EditProfilePageProps {
    user: User
}

const EditProfilePage = ({ user }: EditProfilePageProps) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [editProfile, setEditProfile] = useState<User>(user)
    const [isShowUploadAvatar, setShowUploadAvatar] = useState<boolean>(false)
    const [saveButton, setSaveButton] = useState<string>('Save')

    const uploadAvatar = async (photoUrl: string) => {
        await firebase
        const snapshot = await storage
        // .ref()
        // .child(`/user/${user.avatar}`)
        // .put(photoUrl)

        const fileUrl = await snapshot.ref().getDownloadURL()
        const { protocol, host, pathname } = new URL(fileUrl)
        const preparedUser: User = {
            ...user,
            avatar: `${protocol}//${host}${pathname}?alt=media`,
        }
        console.log('user', user.avatar)
        dispatch({ action: ACTION.USER_UPDATE, data: preparedUser })
    }

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
                    <StyledEditProfileAvatar src={user?.avatar} alt='avatar' />
                    <StyledEditAvatar onClick={() => setShowUploadAvatar(true)}>
                        <Icon size={ICON_SIZE.MEDIUM} src={editAvatar} />
                    </StyledEditAvatar>
                </StyledEditUserAvatar>
                <StyledEditProfile>
                    <StyledEditProfileTitle>Name</StyledEditProfileTitle>
                    <input
                        type='text'
                        value={`${editProfile?.name}`}
                        onChange={event => {
                            setEditProfile({
                                ...editProfile,
                                name: event.target.value,
                            })
                        }}
                    />
                    <StyledEditProfileTitle>Phone</StyledEditProfileTitle>
                    <input
                        type='text'
                        value={editProfile?.phoneNumber}
                        onChange={event => {
                            setEditProfile({
                                ...editProfile,
                                phoneNumber: event.target.value,
                            })
                        }}
                    />
                    <StyledEditProfileTitle>Address</StyledEditProfileTitle>
                    <textarea
                        value={editProfile?.address}
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
                onClick={() => uploadAvatar(user.avatar)}
                onAvatarUpload={() => {}}
                isOpen={isShowUploadAvatar}
                onCancel={() => setShowUploadAvatar(false)}
            />
        </div>
    )
}

export { EditProfilePage }
