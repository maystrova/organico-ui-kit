import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import {
    StyledRegistrationField,
    StyledRegistrationFields,
} from 'Pages/NewRegistrationPage/style'
import { StyledResendCode } from 'Pages/AuthorizationCodePage/style'
import {
    StyledWelcomeIllustration,
    StyledWelcomePage,
    StyledWelcomePageInfo,
    StyledWelcomePageAction,
    StyledPasswordIcon,
} from './style'

import welcomeIllustration from 'Pages/WelcomePage/pics/welcome-illustration.png'
import lockIcon from 'Pages/WelcomePage/pics/lock-icon.svg'
import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'

interface WelcomePageProps {}

const WelcomePage = ({}: WelcomePageProps) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const history = useHistory()

    return (
        <StyledWelcomePage>
            <div>
                <StyledWelcomeIllustration
                    src={welcomeIllustration}
                    alt={'illustration'}
                />
            </div>
            <StyledWelcomePageInfo>
                <h3>Welcome</h3>
                <span>
                    Welcome to Organico Mobile Apps. Please fill in the field
                    below to sign in.
                </span>
            </StyledWelcomePageInfo>
            <StyledRegistrationFields>
                <StyledRegistrationField>
                    <input type='text' placeholder={'Your Phone Number'} />
                </StyledRegistrationField>
                <StyledRegistrationField>
                    <StyledPasswordIcon>
                        <Icon size={ICON_SIZE.SMALL} src={lockIcon} />
                    </StyledPasswordIcon>
                    <input
                        type={isShowPassword ? 'text' : 'password'}
                        placeholder={'Password'}
                    />
                    <button onClick={() => setIsShowPassword(!isShowPassword)}>
                        <Icon
                            size={ICON_SIZE.SMALL}
                            src={isShowPassword ? hidePassword : showPassword}
                        />
                    </button>
                </StyledRegistrationField>
                <StyledResendCode>
                    <button
                        onClick={() => history.push(ROUTES.FORGOT_PASSWORD)}
                    >
                        Forgot Password
                    </button>
                </StyledResendCode>
            </StyledRegistrationFields>
            <StyledWelcomePageAction>
                <Button
                    type={BUTTON_TYPE.PRIMARY}
                    width={'100%'}
                    title={'Sign In'}
                    onClick={() => {}}
                />
            </StyledWelcomePageAction>
        </StyledWelcomePage>
    )
}

export { WelcomePage }
