import React from 'react'
import { StyledBackToPreviousPage } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import back from '../Button/pics/back.svg'

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
