import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledRegistrationField,
    StyledRegistrationTitle,
} from 'Pages/NewRegistrationPage/style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'

interface ResetPasswordPageProps {}

const ResetPasswordPage = ({}: ResetPasswordPageProps) => {
    return (
        <div>
            <StyledTitledHeader>
                <BackToPreviousPage />
                <span>Reset Password</span>
            </StyledTitledHeader>
            <div>
                Please fill in the field below to reset your current password.
            </div>
            <div>
                <StyledRegistrationTitle>New Password</StyledRegistrationTitle>
                <StyledRegistrationField>
                    <input type='text' placeholder={'New Password'} />
                    <Icon size={ICON_SIZE.SMALL} src={showPassword} />
                </StyledRegistrationField>
                <StyledRegistrationTitle>
                    New Password Confirmation
                </StyledRegistrationTitle>
                <StyledRegistrationField>
                    <input
                        type='text'
                        placeholder={'New Password Confirmation'}
                    />
                    <Icon size={ICON_SIZE.SMALL} src={showPassword} />
                </StyledRegistrationField>
                <Button
                    width={'100%'}
                    title={'Reset Password'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}

export { ResetPasswordPage }
