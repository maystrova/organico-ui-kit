import React from 'react'
import { ROUTES } from 'services/route'
import { Link } from 'react-router-dom'

import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledLogOut } from './style'

interface LogOutPageProps {
    logout: () => void
}

const LogOutPage = ({ logout }: LogOutPageProps) => {
    return (
        <StyledLogOut>
            <Link to={ROUTES.PROFILE}>
                <Button
                    type={BUTTON_TYPE.WHITE}
                    onClick={logout}
                    title={'Log Out'}
                    width={'100%'}
                />
            </Link>
        </StyledLogOut>
    )
}

export { LogOutPage }
