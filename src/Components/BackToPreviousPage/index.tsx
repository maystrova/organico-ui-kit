import React from 'react'
import { Link } from 'react-router-dom'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledBackToPreviousPage } from './style'

import back from 'Components/Button/pics/back.svg'

interface BackToPreviousPageProps {}

const BackToPreviousPage = ({}: BackToPreviousPageProps) => {
    return (
        // <Link to={''}>
        <StyledBackToPreviousPage onClick={() => {}}>
            <Icon size={ICON_SIZE.X_SMALL} src={back} />
        </StyledBackToPreviousPage>
        // </Link>
    )
}

export { BackToPreviousPage }
