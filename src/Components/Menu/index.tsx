import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as CartIcon } from 'Components/Menu/pics/cart-icon.svg'
import { ReactComponent as HomeIcon } from 'Components/Menu/pics/home-icon.svg'
import { ReactComponent as ExploreIcon } from 'Components/Menu/pics/explore-icon.svg'
import { ReactComponent as ProfileIcon } from 'Components/Menu/pics/profile-icon.svg'

import { ROUTES } from 'services/route'

import { StyledMenu, StyledMenuItem, StyledMenuContainer } from './style'

interface MenuType {
    title: string
    icon: React.ReactChild
    path: string
}

const MENU_ITEMS: MenuType[] = [
    { title: 'Home', icon: <HomeIcon />, path: ROUTES.DETAIL },
    { title: 'Explore', icon: <ExploreIcon />, path: ROUTES.CATEGORIES },
    { title: 'Cart', icon: <CartIcon />, path: ROUTES.MY_CART },
    { title: 'Profile', icon: <ProfileIcon />, path: ROUTES.PROFILE },
    { title: 'MY_WISHLIST', icon: <ProfileIcon />, path: ROUTES.MY_WISHLIST },
]

const Menu = () => {
    return (
        <StyledMenuContainer>
            <StyledMenu>
                {MENU_ITEMS.map(menuItem => (
                    <NavLink
                        key={menuItem.title}
                        to={menuItem.path}
                        activeClassName='active'
                        exact
                    >
                        <StyledMenuItem>{menuItem.icon}</StyledMenuItem>
                        <StyledMenuItem>{menuItem.title}</StyledMenuItem>
                    </NavLink>
                ))}
            </StyledMenu>
        </StyledMenuContainer>
    )
}

export { Menu }
