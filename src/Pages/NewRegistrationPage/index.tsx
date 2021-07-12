import React from 'react'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledRegistration, StyledRegistrationTitle } from './style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'

interface NewRegistrationPageProps {}

interface RegistrationType {
    title: string
    placeholder: string
    icon?: string
}

const NEW_REGISTRATION: RegistrationType[] = [
    { title: 'Full Name', placeholder: 'Full Name' },
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
                <div>
                    <StyledRegistrationTitle>Full Name</StyledRegistrationTitle>
                </div>
            </StyledRegistration>
        </div>
    )
}

export { NewRegistrationPage }
