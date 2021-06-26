import React, { useContext } from 'react'
import { StyledHeader } from 'Pages/ProductPage/style'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { StyledTitledHeader } from '../WishlistPage/style'
import { StyledProfileInfo, StyledUserAvatar } from '../ProfilePage/style'
import { OrganicContext } from '../../context/storeContext'

interface EditProfilePageProps {}

const EditProfilePage = ({}: EditProfilePageProps) => {
    const { store } = useContext(OrganicContext)
    return (
        <div>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <h4>Edit Profile</h4>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledProfileInfo>
                <StyledUserAvatar>
                    <img src={store.profile.avatar} alt='avatar' />
                </StyledUserAvatar>
            </StyledProfileInfo>
        </div>
    )
}

export { EditProfilePage }
