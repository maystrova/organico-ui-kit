import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import { getUser, getUserCart, User } from 'services/user'

import { ProductPage } from 'Pages/ProductPage'
import { CategoriesPage } from 'Pages/CategoriesPage'
import { CategoryPage } from 'Pages/CategoryPage'
import { Menu } from 'Components/Menu'
import { CartPage } from 'Pages/CartPage'
import { ProfilePage } from 'Pages/ProfilePage'
import { WishlistPage } from 'Pages/WishlistPage'

import { ROUTES } from 'services/route'
import { EditProfilePage } from 'Pages/EditProfilePage'
import { BagPage } from 'Pages/BagPage'
import { DARK, LIGHT } from 'configs/theme'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { NewRegistrationPage } from 'Pages/NewRegistrationPage'
import { LogOutPage } from 'Pages/LogOutPage'
import { LoginPage } from 'Pages/LoginPage'

import { GlobalStyle, StyledLayout, StyledSwitchMode } from './style'

import light from 'Components/Layout/pics/light-mode.svg'
import dark from 'Components/Layout/pics/dark-mode.png'
import { ProductType } from 'Pages/ProductPage/types'
import { getWishlistFromFirebase } from 'services/wishlist'
import { ForgotPasswordPage } from '../../Pages/ForgotPasswordPage'
import { AuthorizationCodePage } from '../../Pages/AuthorizationCodePage'

const Layout = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    const [user, setUser] = useState<User | null>(null)
    const [cart, setCart] = useState<ProductType[]>(store.cart)
    const [wishlist, setWishlist] = useState<ProductType[]>(store.wishList)

    useEffect(() => {
        if (theme === 'light') {
            dispatch({ action: ACTION.SWITCH_THEME, data: DARK })
        } else {
            dispatch({ action: ACTION.SWITCH_THEME, data: LIGHT })
        }
    }, [theme])

    const getStateUser = async (): Promise<void> => {
        const storageUser = await getUser()

        if (storageUser) {
            dispatch({
                action: ACTION.USER_UPDATE,
                data: storageUser,
            })
            setUser(storageUser)
        }

        const storageCart = await getUserCart()
        setCart(storageCart)
    }

    const getStateWishlist = async (): Promise<void> => {
        const storageWishlist = await getWishlistFromFirebase(
            user ? user : store.profile,
        )
        setWishlist(storageWishlist)
    }

    // const getStateCart = async (): Promise<ProductType[]> => {
    //     const storageCart: ProductType[] = await getStateCart()
    //
    //     if (storageCart) {
    //         dispatch({ action: ACTION.USER_UPDATE, data: storageCart })
    //     }
    //     setCart(storageCart)
    //     return storageCart
    // }

    useEffect(() => {
        getStateUser()
    }, [])

    // useEffect(() => {
    //     getStateWishlist()
    // }, [])

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
                        <ProfilePage user={store.profile} />
                    </Route>
                    <Route path={ROUTES.EDIT_PROFILE}>
                        <EditProfilePage user={store.profile} />
                    </Route>
                    <Route
                        path={[ROUTES.MY_BAG, `${user && ROUTES.HOME_SCREEN}`]}
                    >
                        <BagPage />
                    </Route>
                    <Route path={ROUTES.NEW_REGISTRATION}>
                        <NewRegistrationPage />
                    </Route>
                    <Route path={ROUTES.LOGOUT}>
                        <LogOutPage />
                    </Route>
                    <Route
                        path={[
                            ROUTES.SIGN_IN,
                            `${!user && ROUTES.HOME_SCREEN}`,
                        ]}
                    >
                        <LoginPage />
                    </Route>
                    <Route path={ROUTES.FORGOT_PASSWORD}>
                        <ForgotPasswordPage />
                    </Route>
                    <Route path={ROUTES.AUTHORIZATION_CODE}>
                        <AuthorizationCodePage />
                    </Route>
                </Switch>
                <Menu />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
