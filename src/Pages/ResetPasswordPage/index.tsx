import React, { useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'

import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledRegistrationField,
    StyledRegistrationFields,
    StyledRegistrationTitle,
} from 'Pages/NewRegistrationPage/style'
import {
    StyledResetPasswordActions,
    StyledResetPasswordInfo,
    StyledResetPasswordPage,
} from './style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'

interface ResetPasswordPageProps {}

interface ResetPassword {
    title: string
    icon: string
}

const ResetPasswordPage = ({}: ResetPasswordPageProps) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(true)

    const icon: string = isShowPassword ? showPassword : hidePassword

    const RESET_PASSWORD: ResetPassword[] = [
        {
            title: 'Reset Password',
            icon: icon,
        },
        { title: 'Reset Password Confirmation', icon: icon },
    ]

    return (
        <StyledResetPasswordPage>
            <StyledTitledHeader>
                <BackToPreviousPage />
                <span>Reset Password</span>
            </StyledTitledHeader>
            <StyledResetPasswordInfo>
                Please fill in the field below to reset your current password.
            </StyledResetPasswordInfo>
            <StyledResetPasswordActions>
                {RESET_PASSWORD.map(field => {
                    return (
                        <StyledRegistrationFields>
                            <StyledRegistrationTitle>
                                {field.title}
                            </StyledRegistrationTitle>
                            <StyledRegistrationField>
                                <input
                                    type={isShowPassword ? 'password' : 'text'}
                                    placeholder={field.title}
                                />
                                <button
                                    onClick={() =>
                                        setIsShowPassword(!isShowPassword)
                                    }
                                >
                                    <Icon
                                        size={ICON_SIZE.SMALL}
                                        src={field.icon}
                                    />
                                </button>
                            </StyledRegistrationField>
                        </StyledRegistrationFields>
                    )
                })}
            </StyledResetPasswordActions>

            <Button
                width={BUTTON_WIDTH.BIG}
                title={'Reset Password'}
                type={BUTTON_TYPE.PRIMARY}
                onClick={() => {}}
            />
        </StyledResetPasswordPage>
    )
}

export { ResetPasswordPage }
