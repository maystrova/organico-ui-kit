import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'
import { firebase } from 'services/firebase'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ACTION } from 'context/actions'
import { User } from 'services/user'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Link } from 'react-router-dom'

import { OrganicContext } from 'context/storeContext'
import {
    StyledLogin,
    StyledPasswordActions,
    StyledWrongPassword,
} from './style'

import {
    StyledRegistrationActions,
    StyledRegistrationField,
    StyledRegistrationFields,
    StyledRegistrationTitle,
} from 'Pages/NewRegistrationPage/style'

import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'
import anonAvatar from 'Pages/NewRegistrationPage/pics/avatar-anon.png'

interface UserData {
    email: string
    password: string
}

const LoginPage = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [isShowPassword, setShowPassword] = useState<'text' | 'password'>(
        'password',
    )
    const [signInUser, setSignInUser] = useState<UserData>({
        email: '',
        password: '',
    })
    const [wrongPassword, setWrongPassword] = useState<string>('')
    const [newUser, setNewUser] = useState<UserData>({
        password: '',
        email: '',
    })

    const history = useHistory()

    const signIn = async (user: UserData) => {
        const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)

        const loggedInUser = userCredential.user

        if (loggedInUser) {
            const firebaseUserRef = await firebase
                .database()
                .ref()
                .child('users')
                .child(loggedInUser.uid)
                .get()

            const userFromDb = firebaseUserRef.val()

            const preparedUser: User = {
                name: userFromDb?.name ? userFromDb.name : 'Anon',
                id: userFromDb?.id ? userFromDb.id : Math.random().toString(),
                phoneNumber: userFromDb?.phoneNumber
                    ? userFromDb.phoneNumber
                    : '',
                avatar: userFromDb?.avatar ? userFromDb?.avatar : anonAvatar,
                email: userFromDb?.email ? userFromDb.email : '',
                address: userFromDb?.email ? userFromDb?.email : '',
            }

            window.localStorage.setItem('user', JSON.stringify(preparedUser))

            dispatch({ action: ACTION.USER_UPDATE, data: preparedUser })

            if (user) {
                history.push(ROUTES.PROFILE)
            } else setWrongPassword('Wrong password!')
        }

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

    return (
        <StyledLogin>
            <StyledRegistrationFields>
                <StyledRegistrationTitle>E-mail</StyledRegistrationTitle>
                <StyledRegistrationField>
                    <input
                        type='text'
                        placeholder={'Enter e-mail'}
                        onChange={event =>
                            setSignInUser({
                                ...signInUser,
                                email: event.target.value,
                            })
                        }
                    />
                </StyledRegistrationField>
                <StyledRegistrationTitle>Password</StyledRegistrationTitle>
                <StyledRegistrationField>
                    <input
                        type={isShowPassword}
                        placeholder={'Enter password'}
                        onChange={event =>
                            setSignInUser({
                                ...signInUser,
                                password: event.target.value,
                            })
                        }
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
                <StyledPasswordActions>
                    <StyledWrongPassword>{wrongPassword}</StyledWrongPassword>

                    <Link to={ROUTES.CHANGE_PASSWORD}>
                        <span>Forgot password?</span>
                    </Link>
                </StyledPasswordActions>
            </StyledRegistrationFields>
            <StyledRegistrationActions>
                {' '}
                <Button
                    width={'100%'}
                    title={'Sign In'}
                    type={BUTTON_TYPE.PRIMARY}
                    onClick={() => signIn(signInUser)}
                />
                <span>Don't have an account yet?</span>
                <Button
                    type={BUTTON_TYPE.WHITE}
                    width={'100%'}
                    title={'Sign Up'}
                    onClick={() => history.push(ROUTES.NEW_REGISTRATION)}
                />
            </StyledRegistrationActions>
        </StyledLogin>
    )
}

export { LoginPage }
