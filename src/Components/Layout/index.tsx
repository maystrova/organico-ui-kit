import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'

import { ProductPage } from 'Pages/ProductPage'
import { CategoriesPage } from 'Pages/CategoriesPage'
import { CategoryPage } from 'Pages/CategoryPage'
import { Menu } from 'Components/Menu'
import { CartPage } from 'Pages/CartPage'
import { ProfilePage } from 'Pages/ProfilePage'
import { WishlistPage } from 'Pages/WishlistPage'

import { ROUTES } from 'services/route'
import { GlobalStyle, StyledLayout, StyledSwitchMode } from './style'
import { EditProfilePage } from 'Pages/EditProfilePage'
import { BagPage } from 'Pages/BagPage'
import { DARK, LIGHT } from 'configs/theme'
import light from 'Components/Layout/pics/light-mode.svg'
import dark from 'Components/Layout/pics/dark-mode.png'
import { Icon, ICON_SIZE } from '../Icon'

const Layout = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        if (theme === 'light') {
            dispatch({ action: ACTION.SWITCH_THEME, data: DARK })
        } else {
            dispatch({ action: ACTION.SWITCH_THEME, data: LIGHT })
        }
    }, [theme])

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <StyledSwitchMode
                    onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                >
                    <Icon
                        alt={'Switch mode'}
                        size={ICON_SIZE.X_MEDIUM}
                        src={theme === 'light' ? light : dark}
                    />
                </StyledSwitchMode>
                <Switch>
                    <Route path={ROUTES.PRODUCT} exact>
                        <ProductPage
                            onAddToWishlistClicked={productId => {
                                dispatch({
                                    action: ACTION.ADD_TO_WISHLIST,
                                    data: productId,
                                })
                            }}
                            onAddToCartClick={productId => {
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: productId,
                                })
                            }}
                        />
                    </Route>
                    <Route path={ROUTES.MY_CART} exact>
                        <CartPage />
                    </Route>
                    <Route path={ROUTES.MY_WISHLIST} exact>
                        <WishlistPage />
                    </Route>
                    <Route path={[ROUTES.CATEGORIES, '/']} exact>
                        <CategoriesPage />
                    </Route>

                    <Route path={ROUTES.CATEGORY} exact>
                        <CategoryPage />
                    </Route>
                    <Route path={ROUTES.PROFILE}>
                        <ProfilePage />
                    </Route>
                    <Route path={ROUTES.EDIT_PROFILE}>
                        <EditProfilePage />
                    </Route>
                    <Route path={[ROUTES.MY_BAG, ROUTES.HOME_SCREEN]}>
                        <BagPage />
                    </Route>
                </Switch>
                <Menu />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
