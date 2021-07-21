import React, { useContext, useState } from 'react'
import {
    StyledUploadAvatar,
    StyledUploadAvatarBody,
    StyledUploadAvatarHeader,
    StyledUploadAvatarOverlay,
    StyledUploadAvatarTitle,
    StyledUploadAvatarWindow,
} from './style'
import { User } from 'services/user'
import { firebase, storage } from '../../services/firebase'
import { OrganicContext } from '../../context/storeContext'
import { ACTION } from '../../context/actions'

interface UploadAvatarProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit?: (fileIds: string[]) => void
    user: User
}

const UploadAvatar = ({
    isOpen,
    onCancel,
    onSubmit,
    user,
}: UploadAvatarProps) => {
    const { dispatch } = useContext(OrganicContext)
    const [fileIds, setFileIds] = useState<string[]>([])
    const [files, setFiles] = useState<string[]>([])

    if (!isOpen) return null

    const writeFile = async (
        file: string,
        user: User,
    ): Promise<string | null> => {
        return firebase.database().ref(`users/${user.id}/files`).push(file).key
    }

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

            // const { protocol, host, pathname } = new URL(fileUrl)
            // console.log('file', fileUrl)
            //
            // const preparedFile: string = `${protocol}//${host}${pathname}?alt=media`
            // filesData.push(preparedFile)
        }
        // for (const avatar of filesData) {
        //     const newUser: User = {
        //         ...user,
        //         avatar: avatar,
        //     }
        //     dispatch({ action: ACTION.USER_UPDATE, data: newUser })
        // }
        return filesData
    }

    // const writeFilesToFireStore = async (
    //     files: string[],
    //     user: User,
    // ): Promise<string[]> => {
    //     let fileIds = []
    //
    //     for (const file of files) {
    //         try {
    //             const fileId = await writeFile(file, user)
    //
    //             if (fileId) {
    //                 fileIds.push(fileId)
    //             }
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //
    //     return fileIds
    // }

    const uploadFilesHandler = async (files: any) => {
        const filesData = await uploadFiles(files)

        setFiles(filesData)
        setFileIds(filesData)
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
