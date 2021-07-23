import React, { useContext } from 'react'

import { User } from 'services/user'
import { storage } from 'services/firebase'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import { Button, BUTTON_TYPE } from 'Components/Button'

import {
    StyledUploadAvatar,
    StyledUploadAvatarBody,
    StyledUploadAvatarHeader,
    StyledUploadAvatarOverlay,
    StyledUploadAvatarTitle,
    StyledUploadAvatarWindow,
    StyledUploadAvatarFooter,
    StyledUploadFile,
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
                    <StyledUploadFile>
                        <input type='file' onChange={onUploadClick} />
                    </StyledUploadFile>
                </StyledUploadAvatarBody>
                <StyledUploadAvatarFooter>
                    <Button
                        title={'Upload avatar'}
                        type={BUTTON_TYPE.PRIMARY}
                        onClick={() => uploadFiles}
                        width={'50%'}
                    />
                </StyledUploadAvatarFooter>
            </StyledUploadAvatarWindow>
        </StyledUploadAvatar>
    )
}

export { UploadAvatar }
