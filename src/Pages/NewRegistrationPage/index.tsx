import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledRegistration,
    StyledRegistrationTitle,
    StyledRegistrationFields,
    StyledRegistrationField,
    StyledRegistrationActions,
    StyledAcceptTerms,
    StyledCheckbox,
} from './style'

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
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>New Registration</span>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledRegistration>
                <p>
                    It looks like you don’t have an account on this number.
                    Please let us know some information for a secure service.
                </p>
                {NEW_REGISTRATION.map(field => {
                    return (
                        <StyledRegistrationFields>
                            <StyledRegistrationTitle>
                                {field.title}
                            </StyledRegistrationTitle>
                            <StyledRegistrationField>
                                <input
                                    type='text'
                                    placeholder={field.placeholder}
                                />
                                {field.icon && (
                                    <button>
                                        <Icon
                                            size={ICON_SIZE.SMALL}
                                            src={showPassword}
                                        />
                                    </button>
                                )}
                            </StyledRegistrationField>
                        </StyledRegistrationFields>
                    )
                })}
                <StyledAcceptTerms>
                    <StyledCheckbox type='checkbox'></StyledCheckbox>
                    <span>
                        I accept the <a href={''}> Terms of Use </a> and{' '}
                        <a href=''>Privacy Policy</a>
                    </span>
                </StyledAcceptTerms>
            </StyledRegistration>

            <StyledRegistrationActions>
                <Button
                    title={'Sign Up'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => {}}
                />
                <span>or use</span>
                <Button
                    title={'Sign Up with Google'}
                    type={BUTTON_TYPE.WHITE}
                    onClick={() => {}}
                />
            </StyledRegistrationActions>
        </div>
    )
}

export { NewRegistrationPage, NEW_REGISTRATION }
