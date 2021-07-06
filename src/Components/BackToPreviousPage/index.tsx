import React from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as BackButton } from 'Components/Button/pics/back.svg'

import { StyledBackToPreviousPage } from './style'

const BackToPreviousPage = () => {
    const history = useHistory()

    return (
        <StyledBackToPreviousPage onClick={() => history.goBack()}>
            <BackButton width={'6px'} />
        </StyledBackToPreviousPage>
    )
}

export { BackToPreviousPage }
