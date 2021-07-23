import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../services/route'
import { Button, BUTTON_TYPE } from '../../Components/Button'
import { StyledLogin } from './style'

interface LoginPageProps {
    login: () => void
}

const LoginPage = ({ login }: LoginPageProps) => {
    return (
        <StyledLogin>
            <Link to={ROUTES.PROFILE}>
                <Button
                    width={'100%'}
                    title={'Sign In'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={login}
                />
            </Link>
        </StyledLogin>
    )
}

export { LoginPage }
