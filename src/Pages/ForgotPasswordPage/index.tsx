import React from 'react'

import { Button, BUTTON_TYPE } from 'Components/Button'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledForgotPasswordIllustration,
    StyledForgotPasswordPageContainer,
    StyledForgotPasswordInfo,
    StyledVerifyPasswordInfo,
} from './style'

import forgotPassword from 'Pages/ForgotPasswordPage/pics/forgot-password.png'
import { StyledRegistrationField } from '../NewRegistrationPage/style'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../services/route'

interface ForgotPasswordPageProps {}

const ForgotPasswordPage = ({}: ForgotPasswordPageProps) => {
    const history = useHistory()

    return (
        <div>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>Forgot Password</span>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledForgotPasswordPageContainer>
                <div>
                    <StyledForgotPasswordIllustration
                        src={forgotPassword}
                        alt='illustration'
                    />
                </div>
                <StyledForgotPasswordInfo>
                    <h3>Enter your phone number</h3>
                    <StyledVerifyPasswordInfo>
                        We need to verify you. We will send you a one-time
                        authorization code.{' '}
                    </StyledVerifyPasswordInfo>
                    <StyledRegistrationField>
                        <input type='text' />
                    </StyledRegistrationField>
                </StyledForgotPasswordInfo>
                <Button
                    width={'100%'}
                    title={'Next'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => history.push(ROUTES.AUTHORIZATION_CODE)}
                />
            </StyledForgotPasswordPageContainer>
        </div>
    )
}

export { ForgotPasswordPage }
