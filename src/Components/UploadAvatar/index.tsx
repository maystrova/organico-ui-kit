import React, { useContext, useState } from 'react'

import { User } from 'services/user'
import { firebase, storage } from 'services/firebase'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'

import {
    StyledUploadAvatar,
    StyledUploadAvatarBody,
    StyledUploadAvatarHeader,
    StyledUploadAvatarOverlay,
    StyledUploadAvatarTitle,
    StyledUploadAvatarWindow,
} from './style'

interface UploadAvatarProps {
    isOpen: boolean
    onCancel: () => void
    user: User
}

const UploadAvatar = ({ isOpen, onCancel, user }: UploadAvatarProps) => {
    const { dispatch } = useContext(OrganicContext)

    if (!isOpen) return null

    const uploadFiles = async (files: any) => {
        let filesData: string[] = []

        for (const file of files) {
            const snapshot = await storage
                .ref()
                .child(`/user/${user.avatar}`)
                .put(file)

            const fileUrl = await snapshot.ref.getDownloadURL()
            console.log('avatar', fileUrl)
            const newUser: User = {
                ...user,
                avatar: fileUrl,
            }
            dispatch({ action: ACTION.USER_UPDATE, data: newUser })
            onCancel()
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

    return (
        <StyledUploadAvatar>
            <StyledUploadAvatarOverlay onClick={onCancel} />
            <StyledUploadAvatarWindow>
                <StyledUploadAvatarHeader>
                    <StyledUploadAvatarTitle>
                        Upload new photo
                    </StyledUploadAvatarTitle>
                </StyledUploadAvatarHeader>
                <StyledUploadAvatarBody>
                    <input type='file' onChange={onUploadClick} />
                </StyledUploadAvatarBody>
                <button onClick={() => uploadFiles}>Upload</button>
            </StyledUploadAvatarWindow>
        </StyledUploadAvatar>
    )
}

export { UploadAvatar }
