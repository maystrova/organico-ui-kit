import React, { useContext, useEffect, useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { Link } from 'react-router-dom'

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
    StyledRegistrationPasswordInfo,
    StyledRegistrationTitle,
} from './style'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'
import anonAvatar from 'Pages/NewRegistrationPage/pics/avatar-anon.png'
import passwordMatch from 'Pages/NewRegistrationPage/pics/check.svg'
import passwordNotMatch from 'Pages/NewRegistrationPage/pics/close.svg'
import { ROUTES } from 'services/route'

interface NewRegistrationPageProps {
    signUpWithGoogle: () => void
}

interface RegistrationType {
    title: string
    placeholder: string
    icon?: string
    inputType: string
    confirmationIcon?: string
}

interface RegistrationUser {
    fullName: string
    email: string
    password: string
    confirmationPassword: string
}

interface PasswordInfo {
    text: string
    color: string
}

const redirectToProfile = () => {
    setTimeout(ROUTES.PROFILE, 1000)
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
    const [passwordInfo, setPasswordInfo] = useState<PasswordInfo>({
        text: passwordError,
        color: 'red',
    })
    const [signUpButton, setSignUpButton] = useState<string>('Sign Up')

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
            confirmationIcon: passwordMatch,
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
                    password: password,
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

    useEffect(() => {
        if (
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(
                signUp.password,
            )
        ) {
            setPasswordInfo({
                text: 'Great Password!',
                color: 'rgba(46, 204, 113, 1)',
            })
        } else {
            setPasswordInfo({
                text: passwordError,
                color: 'red',
            })
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

                                {field.confirmationIcon &&
                                signUp.confirmationPassword &&
                                signUp.confirmationPassword ===
                                    signUp.password ? (
                                    <Icon
                                        size={ICON_SIZE.XX_SMALL}
                                        src={passwordMatch}
                                    />
                                ) : (
                                    <div></div>
                                )}

                                {field.confirmationIcon &&
                                signUp.confirmationPassword &&
                                signUp.confirmationPassword !==
                                    signUp.password ? (
                                    <Icon
                                        size={ICON_SIZE.SMALL}
                                        src={passwordNotMatch}
                                    />
                                ) : (
                                    <div></div>
                                )}

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
                <StyledRegistrationPasswordInfo
                    style={{ color: passwordInfo.color }}
                >
                    {passwordInfo.text}
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
                <Link to={ROUTES.PROFILE}>
                    <Button
                        width={'100%'}
                        title={signUpButton}
                        type={BUTTON_TYPE.PRIMARY}
                        onClick={() => {
                            if (
                                signUp.password ===
                                    signUp.confirmationPassword &&
                                isChecked
                            ) {
                                authorization(signUp.email, signUp.password)
                                setSignUpButton('Successful!')
                            }
                        }}
                    />
                </Link>

                <span>or use</span>
                <Link to={ROUTES.PROFILE}>
                    <Button
                        title={'Sign Up with Google'}
                        type={BUTTON_TYPE.WHITE}
                        onClick={signUpWithGoogle}
                    />
                </Link>
            </StyledRegistrationActions>
        </div>
    )
}

export { NewRegistrationPage }
