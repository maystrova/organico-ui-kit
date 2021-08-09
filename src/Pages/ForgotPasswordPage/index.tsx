import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { ROUTES } from 'services/route'
import PhoneInput from 'react-phone-number-input'

import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'

import {
    StyledForgotPasswordIllustration,
    StyledForgotPasswordInfo,
    StyledForgotPasswordPageContainer,
    StyledVerifyPasswordInfo,
} from './style'
import { StyledRegistrationField } from 'Pages/NewRegistrationPage/style'

import forgotPassword from 'Pages/ForgotPasswordPage/pics/forgot-password.png'

interface ForgotPasswordPageProps {}

const ForgotPasswordPage = ({}: ForgotPasswordPageProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('')

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
                        <PhoneInput
                            defaultCountry={'US'}
                            onChange={setPhoneNumber}
                            value={phoneNumber}
                        />
                    </StyledRegistrationField>
                </StyledForgotPasswordInfo>
                <Button
                    width={BUTTON_WIDTH.BIG}
                    title={'Next'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => history.push(ROUTES.AUTHORIZATION_CODE)}
                />
            </StyledForgotPasswordPageContainer>
        </div>
    )
}

export { ForgotPasswordPage }
