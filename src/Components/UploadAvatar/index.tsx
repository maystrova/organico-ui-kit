import React from 'react'

import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'

import {
    StyledUploadAvatar,
    StyledUploadAvatarBody,
    StyledUploadAvatarFooter,
    StyledUploadAvatarHeader,
    StyledUploadAvatarOverlay,
    StyledUploadAvatarTitle,
    StyledUploadAvatarWindow,
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
                        width={BUTTON_WIDTH.MEDIUM}
                    />
                </StyledUploadAvatarFooter>
            </StyledUploadAvatarWindow>
        </StyledUploadAvatar>
    )
}

export { UploadAvatar }
