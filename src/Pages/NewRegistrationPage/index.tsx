import React, { useContext, useEffect, useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import { OrganicContext } from 'context/storeContext'
import { firebase } from 'services/firebase'
import { User } from 'services/user'
import { ACTION } from 'context/actions'

import {
    StyledAcceptTerms,
    StyledCheckbox,
    StyledRegistration,
    StyledRegistrationActions,
    StyledRegistrationField,
    StyledRegistrationFields,
    StyledRegistrationTitle,
    StyledRegistrationPasswordInfo,
} from './style'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'
import anonAvatar from 'Pages/NewRegistrationPage/pics/avatar-anon.png'
import { isNumber } from 'util'

interface NewRegistrationPageProps {
    signUpWithGoogle: () => void
}

interface RegistrationType {
    title: string
    placeholder: string
    icon?: string
    inputType: string
}

interface RegistrationUser {
    fullName: string
    email: string
    password: string
    confirmationPassword: string
}

const passwordError =
    'The password must contain at least three character categories among the following: Uppercase characters (A-Z) Lowercase characters (a-z) Digits (0-9)'

const NewRegistrationPage = ({
    signUpWithGoogle,
}: NewRegistrationPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [isShowPassword, setShowPassword] = useState<'text' | 'password'>(
        'password',
    )
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [signUp, setSignUp] = useState<RegistrationUser>({
        fullName: '',
        email: '',
        password: '',
        confirmationPassword: '',
    })
    const [passwordInfo, setPasswordInfo] = useState<string>(passwordError)

    const NEW_REGISTRATION: RegistrationType[] = [
        { title: 'Full Name', placeholder: 'Full Name', inputType: 'text' },
        { title: 'E-mail', placeholder: 'E-mail', inputType: 'text' },
        {
            title: 'Password',
            placeholder: 'Password',
            icon: showPassword,
            inputType: isShowPassword,
        },
        {
            title: 'Password Confirmation',
            placeholder: 'Password Confirmation',
            icon: showPassword,
            inputType: isShowPassword,
        },
    ]

    const authorization = async (email: string, password: string) => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user
                const preparedUser: User = {
                    name: signUp.fullName,
                    email: user?.email ? user.email : '',
                    id: user?.uid ? user.uid : Math.random().toString(),
                    avatar: anonAvatar,
                }
                dispatch({ action: ACTION.USER_UPDATE, data: preparedUser })

                // ...
            })
            .catch(error => {
                var errorCode = error.code
                var errorMessage = error.message
                // ..
            })
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user', user)

                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid
                // ...
            } else {
                // User is signed out
                // ...
            }
        })
    }

    const onPasswordCheck = () => {}

    useEffect(() => {
        if (
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(
                signUp.password,
            ) &&
            signUp.password === signUp.confirmationPassword
        ) {
            setPasswordInfo('Yes')
        } else {
            setPasswordInfo(passwordError)
        }
    }, [signUp.password, signUp.confirmationPassword])

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
                        <StyledRegistrationFields key={field.title}>
                            <StyledRegistrationTitle>
                                {field.title}
                            </StyledRegistrationTitle>
                            <StyledRegistrationField>
                                <input
                                    type={field.inputType}
                                    placeholder={field.placeholder}
                                    onChange={event => {
                                        if (field.title === 'Full Name') {
                                            setSignUp({
                                                ...signUp,
                                                fullName: event.target.value,
                                            })
                                        } else if (field.title === 'E-mail') {
                                            setSignUp({
                                                ...signUp,
                                                email: event.target.value,
                                            })
                                        } else if (field.title === 'Password') {
                                            setSignUp({
                                                ...signUp,
                                                password: event.target.value,
                                            })
                                        } else if (
                                            field.title ===
                                            'Password Confirmation'
                                        ) {
                                            setSignUp({
                                                ...signUp,
                                                confirmationPassword:
                                                    event.target.value,
                                            })
                                        }
                                    }}
                                />
                                {field.icon && (
                                    <button
                                        onClick={() =>
                                            setShowPassword(
                                                isShowPassword === 'password'
                                                    ? 'text'
                                                    : 'password',
                                            )
                                        }
                                    >
                                        <Icon
                                            size={ICON_SIZE.SMALL}
                                            src={
                                                isShowPassword === 'password'
                                                    ? showPassword
                                                    : hidePassword
                                            }
                                        />
                                    </button>
                                )}
                            </StyledRegistrationField>
                        </StyledRegistrationFields>
                    )
                })}
                <StyledRegistrationPasswordInfo>
                    {passwordInfo}
                </StyledRegistrationPasswordInfo>
                <StyledAcceptTerms>
                    <StyledCheckbox
                        type='checkbox'
                        onClick={() => setIsChecked(!isChecked)}
                    ></StyledCheckbox>
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
                    onClick={() => {
                        if (
                            signUp.password === signUp.confirmationPassword &&
                            isChecked
                        ) {
                            authorization(signUp.email, signUp.password)
                        }
                    }}
                />
                <span>or use</span>
                <Button
                    title={'Sign Up with Google'}
                    type={BUTTON_TYPE.WHITE}
                    onClick={signUpWithGoogle}
                />
            </StyledRegistrationActions>
        </div>
    )
}

export { NewRegistrationPage }
