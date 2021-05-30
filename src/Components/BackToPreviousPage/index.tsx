import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledBackToPreviousPage } from './style'

import back from 'Components/Button/pics/back.svg'

interface BackToPreviousPageProps {
    onClick: () => void
}

const BackToPreviousPage = ({ onClick }: BackToPreviousPageProps) => {
    return (
        <StyledBackToPreviousPage onClick={onClick}>
            <Icon size={ICON_SIZE.X_SMALL} src={back} />
        </StyledBackToPreviousPage>
    )
}

export { BackToPreviousPage }
