import React from 'react'

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
    onUploadClick: (event: any) => void
    uploadFiles: () => void
}

const UploadAvatar = ({
    isOpen,
    onCancel,
    onUploadClick,
    uploadFiles,
}: UploadAvatarProps) => {
    if (!isOpen) return null

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
                        <input
                            type='file'
                            onChange={event => onUploadClick(event)}
                        />
                    </StyledUploadFile>
                </StyledUploadAvatarBody>
                <StyledUploadAvatarFooter>
                    <Button
                        title={'Upload avatar'}
                        type={BUTTON_TYPE.PRIMARY}
                        onClick={uploadFiles}
                        width={'50%'}
                    />
                </StyledUploadAvatarFooter>
            </StyledUploadAvatarWindow>
        </StyledUploadAvatar>
    )
}

export { UploadAvatar }
