import React, { useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'

import { StyledAuthorizationCodePage } from 'Pages/AuthorizationCodePage/style'
import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledResetPasswordInfo } from 'Pages/ResetPasswordPage/style'
import {
    StyledRegistrationField,
    StyledRegistrationFields,
    StyledRegistrationTitle,
} from 'Pages/NewRegistrationPage/style'
import { StyledChangePasswordActions } from './style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'

interface ChangePasswordPageProps {}

interface ChangePasswordType {
    title: string
    icon: string
}

const ChangePasswordPage = ({}: ChangePasswordPageProps) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(true)

    const icon = isShowPassword ? showPassword : hidePassword

    const CHANGE_PASSWORD_MENU: ChangePasswordType[] = [
        { title: 'Current Password', icon: icon },
        { title: 'New Password', icon: icon },
        { title: 'New Password Confirmation', icon: icon },
    ]

    return (
        <StyledAuthorizationCodePage>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>Change Password</span>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledResetPasswordInfo>
                Please fill in the field below to change your current password.
            </StyledResetPasswordInfo>
            <StyledChangePasswordActions>
                {CHANGE_PASSWORD_MENU.map(field => {
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
            </StyledChangePasswordActions>
            <Button
                title={'Save Password'}
                width={BUTTON_WIDTH.BIG}
                type={BUTTON_TYPE.PRIMARY}
                onClick={() => {}}
            />
        </StyledAuthorizationCodePage>
    )
}

export { ChangePasswordPage }
