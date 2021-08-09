import React from 'react'

import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'

import { StyledRegistrationField } from 'Pages/NewRegistrationPage/style'
import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledAuthorizationCode,
    StyledAuthorizationCodePage,
    StyledResendCode,
    StyledSentSms,
} from './style'

interface AuthorizationCodePageProps {}

const AuthorizationCodePage = ({}: AuthorizationCodePageProps) => {
    const history = useHistory()

    return (
        <StyledAuthorizationCodePage>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>OTAC Number</span>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledAuthorizationCode>
                <h3>Enter Authorization Code</h3>
                <div>
                    <StyledSentSms>We have sent SMS to:</StyledSentSms>
                    <span>+1 (XXX) XXX-X120</span>
                </div>
                <StyledRegistrationField>
                    <input type='text' placeholder={'6 Digit Code'} />
                </StyledRegistrationField>
                <StyledResendCode>
                    <button>Resend Code</button>
                </StyledResendCode>
            </StyledAuthorizationCode>{' '}
            <Button
                width={BUTTON_WIDTH.BIG}
                title={'Next'}
                type={BUTTON_TYPE.PRIMARY}
                onClick={() => history.push(ROUTES.CHANGE_PASSWORD)}
            />
        </StyledAuthorizationCodePage>
    )
}

export { AuthorizationCodePage }
