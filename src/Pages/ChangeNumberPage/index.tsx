import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'

import { StyledRegistrationField } from 'Pages/NewRegistrationPage/style'
import { StyledResetPasswordInfo } from 'Pages/ResetPasswordPage/style'
import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledAuthorizationCode,
    StyledAuthorizationCodePage,
    StyledResendCode,
} from 'Pages/AuthorizationCodePage/style'

interface ChangeNumberPageProps {}

const ChangeNumberPage = ({}: ChangeNumberPageProps) => {
    return (
        <StyledAuthorizationCodePage>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>OTAC Number</span>
                </StyledTitledHeader>{' '}
            </StyledHeader>
            <StyledResetPasswordInfo>
                It looks like you changed your phone number. Please enter the
                OTAC number that we have sent to your new phone number.
            </StyledResetPasswordInfo>
            <StyledAuthorizationCode>
                {' '}
                <StyledRegistrationField>
                    <input type='text' placeholder={'6 Digit Code'} />
                </StyledRegistrationField>
                <StyledResendCode>
                    <button>Resend Code</button>
                </StyledResendCode>
            </StyledAuthorizationCode>
            <Button
                title={'Confirm'}
                width={BUTTON_WIDTH.BIG}
                type={BUTTON_TYPE.PRIMARY}
                onClick={() => {}}
            />
        </StyledAuthorizationCodePage>
    )
}

export { ChangeNumberPage }
