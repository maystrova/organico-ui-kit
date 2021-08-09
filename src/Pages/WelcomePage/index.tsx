import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE, BUTTON_WIDTH } from 'Components/Button'

import {
    StyledRegistrationField,
    StyledRegistrationFields,
} from 'Pages/NewRegistrationPage/style'
import { StyledResendCode } from 'Pages/AuthorizationCodePage/style'
import {
    StyledPasswordIcon,
    StyledWelcomeIllustration,
    StyledWelcomePage,
    StyledWelcomePageAction,
    StyledWelcomePageInfo,
} from './style'

import welcomeIllustration from 'Pages/WelcomePage/pics/welcome-illustration.png'
import lockIcon from 'Pages/WelcomePage/pics/lock-icon.svg'
import showPassword from 'Pages/NewRegistrationPage/pics/password-icon.svg'
import hidePassword from 'Pages/NewRegistrationPage/pics/hide-password.svg'

interface WelcomePageProps {}

const WelcomePage = ({}: WelcomePageProps) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>('')

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
                    <PhoneInput
                        placeholder={'Your Phone Number'}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        defaultCountry={'US'}
                    />
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
                    width={BUTTON_WIDTH.BIG}
                    title={'Sign In'}
                    onClick={() => {}}
                />
            </StyledWelcomePageAction>
        </StyledWelcomePage>
    )
}

export { WelcomePage }
