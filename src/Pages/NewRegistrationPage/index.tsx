import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledRegistration, StyledRegistrationTitle } from './style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'

interface NewRegistrationPageProps {}

interface RegistrationType {
    title: string
    placeholder: string
    icon: string
}

const NEW_REGISTRATION: RegistrationType[] = [
    { title: 'Full Name', placeholder: 'Full Name', icon: '' },
    { title: 'Password', placeholder: 'Password', icon: showPassword },
    {
        title: 'Password Confirmation',
        placeholder: 'Password Confirmation',
        icon: showPassword,
    },
]

const NewRegistrationPage = ({}: NewRegistrationPageProps) => {
    return (
        <div>
            <StyledHeader>
                <BackToPreviousPage />
                <span>New Registration</span>
            </StyledHeader>
            <StyledRegistration>
                <div>
                    It looks like you don’t have an account on this number.
                    Please let us know some information for a secure service.
                </div>
                {NEW_REGISTRATION.map(field => {
                    return (
                        <div>
                            <StyledRegistrationTitle>
                                {field.title}
                            </StyledRegistrationTitle>
                            <label>
                                <input
                                    type='text'
                                    placeholder={field.placeholder}
                                />
                                <Icon size={ICON_SIZE.SMALL} src={field.icon} />
                            </label>
                        </div>
                    )
                })}
                <div>
                    I accept the <a href={''}>Terms of Use</a> and{' '}
                    <a href=''>Privacy Policy</a>
                </div>
                <Button
                    title={'Sign Up'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => {}}
                />
                <div>or use</div>
                <Button
                    title={'Sign Up with Google'}
                    type={BUTTON_TYPE.WHITE}
                    onClick={() => {}}
                />
            </StyledRegistration>
        </div>
    )
}

export { NewRegistrationPage, NEW_REGISTRATION }
