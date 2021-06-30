import React from 'react'
import { useHistory } from 'react-router-dom'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledBackToPreviousPage } from './style'

import back from 'Components/Button/pics/back.svg'

interface BackToPreviousPageProps {}

const BackToPreviousPage = ({}: BackToPreviousPageProps) => {
    const history = useHistory()

    return (
        <StyledBackToPreviousPage onClick={() => history.goBack()}>
            <Icon size={ICON_SIZE.X_SMALL} src={back} />
        </StyledBackToPreviousPage>
    )
}

export { BackToPreviousPage }
