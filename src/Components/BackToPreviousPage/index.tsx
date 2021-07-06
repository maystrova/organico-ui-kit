import React from 'react'
import { useHistory } from 'react-router-dom'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledBackToPreviousPage, StyledBack } from './style'

import back from 'Components/Button/pics/back.svg'

interface BackToPreviousPageProps {}

const BackToPreviousPage = ({}: BackToPreviousPageProps) => {
    const history = useHistory()

    return (
        <StyledBack>
            <StyledBackToPreviousPage onClick={() => history.goBack()}>
                <Icon size={ICON_SIZE.X_SMALL} src={back} />
            </StyledBackToPreviousPage>
        </StyledBack>
    )
}

export { BackToPreviousPage }
