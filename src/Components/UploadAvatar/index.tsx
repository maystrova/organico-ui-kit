import React from 'react'
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
    onAvatarUpload: () => void
    onClick: () => void
}

const UploadAvatar = ({
    isOpen,
    onCancel,
    onAvatarUpload,
    onClick,
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
                    <input
                        type='file'
                        onChange={event => {
                            onAvatarUpload()
                        }}
                    />
                </StyledUploadAvatarBody>
                <button onClick={onClick}>Upload</button>
            </StyledUploadAvatarWindow>
        </StyledUploadAvatar>
    )
}

export { UploadAvatar }
