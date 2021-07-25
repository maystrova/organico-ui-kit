import React, { useContext } from 'react'
import { ROUTES } from 'services/route'
import { useHistory } from 'react-router-dom'

import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledLogOut } from './style'
import { ACTION } from 'context/actions'
import { DEFAULT_USER } from 'services/user'
import { OrganicContext } from 'context/storeContext'

const LogOutPage = () => {
    const { dispatch } = useContext(OrganicContext)

    const history = useHistory()

    const logOut = async (): Promise<void> => {
        await window.localStorage.removeItem('user')
        dispatch({ action: ACTION.USER_UPDATE, data: DEFAULT_USER })
        history.push(ROUTES.SIGN_IN)
    }

    return (
        <StyledLogOut>
            <Button
                type={BUTTON_TYPE.WHITE}
                onClick={() => logOut()}
                title={'Log Out'}
                width={'100%'}
            />
        </StyledLogOut>
    )
}

export { LogOutPage }
