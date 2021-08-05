import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { UploadAvatar } from 'Components/UploadAvatar'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { firebase, storage } from 'services/firebase'
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
import { ROUTES } from 'services/route'

interface EditProfilePageProps {
    user: User
}

const EditProfilePage = ({ user }: EditProfilePageProps) => {
    const { dispatch } = useContext(OrganicContext)
    const [editProfile, setEditProfile] = useState<User>(user)
    const [isShowUploadAvatar, setShowUploadAvatar] = useState<boolean>(false)
    const [saveButton, setSaveButton] = useState<string>('Save')
    const [isPhoneNumberChanged, setIsPhoneNumberChanged] = useState<boolean>(
        false,
    )

    const history = useHistory()

    const uploadFiles = async (files: any) => {
        let filesData: string[] = []

        for (const file of files) {
            const snapshot = await storage
                .ref()
                .child(`/user/${user.avatar}`)
                .put(file)

            const fileUrl = await snapshot.ref.getDownloadURL()

            const newUser: User = {
                ...user,
                avatar: fileUrl,
            }
            dispatch({ action: ACTION.USER_UPDATE, data: newUser })
            setEditProfile({
                ...editProfile,
                avatar: fileUrl,
            })

            setShowUploadAvatar(false)
        }

        return filesData
    }

    const uploadFilesHandler = async (files: any) => {
        await uploadFiles(files)
    }

    const onUploadClick = async (e: any): Promise<void> => {
        let files = e.target.files
        await uploadFilesHandler(files)
    }

    const onUserInfoSave = async () => {
        dispatch({
            action: ACTION.USER_UPDATE,
            data: editProfile,
        })
        setSaveButton('Successfully saved!')
        await firebase.database().ref(`users/${user.id}`).set(editProfile)
        await window.localStorage.setItem('user', JSON.stringify(editProfile))

        history.push(ROUTES.PROFILE)
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
                            setIsPhoneNumberChanged(true)
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
                            if (isPhoneNumberChanged) {
                                history.push(ROUTES.CHANGE_NUMBER)
                            } else onUserInfoSave()
                        }}
                    />
                </StyledEditProfileFooter>
            </StyledProfileInfo>
            <UploadAvatar
                uploadFiles={() => uploadFiles}
                onUploadClick={event => onUploadClick(event)}
                isOpen={isShowUploadAvatar}
                onCancel={() => setShowUploadAvatar(false)}
            />
        </div>
    )
}

export { EditProfilePage }
