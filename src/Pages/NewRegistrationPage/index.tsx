import React, { useContext, useEffect, useState } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'
import { useHistory } from 'react-router-dom'

import { OrganicContext } from 'context/storeContext'
import { firebase } from 'services/firebase'
import { User } from 'services/user'
import { ACTION } from 'context/actions'
import { ROUTES } from 'services/route'

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

interface NewRegistrationPageProps {}

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

const passwordError =
    'The password must contain at least three character categories among the following: Uppercase characters (A-Z) Lowercase characters (a-z) Digits (0-9)'

const NewRegistrationPage = ({}: NewRegistrationPageProps) => {
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

    const history = useHistory()

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

    const verification = () => {
        firebase
            .auth()
            .currentUser?.sendEmailVerification()
            .then(() => {
                // Email verification sent!
                // ...
            })
    }

    const authorization = (email: string, password: string) => {
        firebase
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
                user?.sendEmailVerification()
                window.localStorage.setItem(
                    'user',
                    JSON.stringify(preparedUser),
                )

                dispatch({ action: ACTION.USER_UPDATE, data: preparedUser })

                history.push(ROUTES.PROFILE)
            })
            .catch(error => {
                var errorCode = error.code
                var errorMessage = error.message
                // ..
            })

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
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

    const onGoogleAuthorization = async () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        await firebase
            .auth()
            .signInWithPopup(authProvider)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user
                const preparedUser: User = {
                    name: user?.displayName ? user.displayName : 'User',
                    avatar: user?.photoURL ? user.photoURL : '',
                    phoneNumber: user?.phoneNumber ? user?.phoneNumber : '',
                    id: user?.uid ? user?.uid : 'empty_id',
                    email: user?.email ? user.email : '',
                }

                window.localStorage.setItem(
                    'user',
                    JSON.stringify(preparedUser),
                )
                dispatch({
                    action: ACTION.USER_UPDATE,
                    data: preparedUser,
                })
                if (user) {
                    history.push(ROUTES.PROFILE)
                }

                // ...
            })
            .catch(() => {})
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
                <Button
                    width={BUTTON_WIDTH.BIG}
                    title={signUpButton}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => {
                        if (
                            signUp.password === signUp.confirmationPassword &&
                            isChecked
                        ) {
                            authorization(signUp.email, signUp.password)
                            verification()
                            setSignUpButton('Successful!')
                        }
                    }}
                />

                <span>or use</span>
                <Button
                    title={'Sign Up with Google'}
                    type={BUTTON_TYPE.WHITE}
                    onClick={() => onGoogleAuthorization()}
                    width={BUTTON_WIDTH.BIG}
                />
            </StyledRegistrationActions>
        </div>
    )
}

export { NewRegistrationPage }
