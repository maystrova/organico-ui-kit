import React, { useState } from 'react'

import { Button, BUTTON_TYPE } from 'Components/Button'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledLogin } from './style'
import {
    StyledRegistrationField,
    StyledRegistrationFields,
    StyledRegistrationTitle,
} from '../NewRegistrationPage/style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'

interface LoginPageProps {
    login: () => void
    onEmailEntered: (event: any) => void
    onPasswordEntered: (event: any) => void
}

const LoginPage = ({
    login,
    onEmailEntered,
    onPasswordEntered,
}: LoginPageProps) => {
    const [isShowPassword, setShowPassword] = useState<'text' | 'password'>(
        'password',
    )

    return (
        <StyledLogin>
            <StyledRegistrationFields>
                <StyledRegistrationTitle>E-mail</StyledRegistrationTitle>
                <StyledRegistrationField>
                    <input
                        type='text'
                        placeholder={'Enter e-mail'}
                        onChange={event => onEmailEntered(event)}
                    />
                </StyledRegistrationField>
                <StyledRegistrationTitle>Password</StyledRegistrationTitle>
                <StyledRegistrationField>
                    <input
                        type={isShowPassword}
                        placeholder={'Enter password'}
                        onChange={event => onPasswordEntered(event)}
                    />
                    <button
                        onClick={() =>
                            setShowPassword(
                                isShowPassword === 'password'
                                    ? 'text'
                                    : 'password',
                            )
                        }
                    >
                        {' '}
                        <Icon
                            size={ICON_SIZE.SMALL}
                            src={
                                isShowPassword === 'password'
                                    ? showPassword
                                    : hidePassword
                            }
                        />
                    </button>
                </StyledRegistrationField>
            </StyledRegistrationFields>
            <Button
                width={'100%'}
                title={'Sign In'}
                type={BUTTON_TYPE.PRIMARY}
                onClick={login}
            />
        </StyledLogin>
    )
}

export { LoginPage }
