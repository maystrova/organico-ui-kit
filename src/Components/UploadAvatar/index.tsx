import React from 'react'
import {
    StyledUploadAvatar,
    StyledUploadAvatarHeader,
    StyledUploadAvatarOverlay,
    StyledUploadAvatarWindow,
    StyledUploadAvatarTitle,
    StyledUploadAvatarBody,
} from './style'

interface UploadAvatarProps {
    isOpen: boolean
    onCancel: () => void
    onUploadClick: (event: any) => void
}

const UploadAvatar = ({
    isOpen,
    onCancel,
    onUploadClick,
}: UploadAvatarProps) => {
    if (!isOpen) return null

    return (
        <StyledUploadAvatar>
            <StyledUploadAvatarOverlay
                onClick={onCancel}
            ></StyledUploadAvatarOverlay>
            <StyledUploadAvatarWindow>
                <StyledUploadAvatarHeader>
                    <StyledUploadAvatarTitle>
                        Upload new photo
                    </StyledUploadAvatarTitle>
                </StyledUploadAvatarHeader>
                <StyledUploadAvatarBody>
                    <input type='file' onChange={onUploadClick} />
                </StyledUploadAvatarBody>
            </StyledUploadAvatarWindow>
        </StyledUploadAvatar>
    )
}

export { UploadAvatar }
