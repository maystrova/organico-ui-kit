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

interface ForgotPasswordPageProps {}

const ForgotPasswordPage = ({}: ForgotPasswordPageProps) => {
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
                    title={'Next'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => {}}
                />
            </StyledForgotPasswordPageContainer>
        </div>
    )
}

export { ForgotPasswordPage }
