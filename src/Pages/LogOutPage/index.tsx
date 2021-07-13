import React from 'react'
import { Button, BUTTON_TYPE } from 'Components/Button'

interface LogOutPageProps {
    logout: () => void
}

const LogOutPage = ({ logout }: LogOutPageProps) => {
    return (
        <div>
            <Button
                type={BUTTON_TYPE.WHITE}
                onClick={logout}
                title={'Log Out'}
                width={'100%'}
            />
        </div>
    )
}

export { LogOutPage }
