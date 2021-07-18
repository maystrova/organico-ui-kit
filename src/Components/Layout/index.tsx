import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import { firebase } from 'services/firebase'
import { DEFAULT_USER, getUser, User } from 'services/user'

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

import { GlobalStyle, StyledLayout, StyledSwitchMode } from './style'

import light from 'Components/Layout/pics/light-mode.svg'
import dark from 'Components/Layout/pics/dark-mode.png'

const Layout = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    console.log('store', store)

    useEffect(() => {
        if (theme === 'light') {
            dispatch({ action: ACTION.SWITCH_THEME, data: DARK })
        } else {
            dispatch({ action: ACTION.SWITCH_THEME, data: LIGHT })
        }
    }, [theme])

    const onGoogleAuthorization = async () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        await firebase
            .auth()
            .signInWithPopup(authProvider)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user
                console.log('user', user)
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

                // ...
            })
            .catch(() => {})
    }

    const getStateUser = async (): Promise<void> => {
        const storageUser = await getUser()

        if (storageUser) {
            dispatch({
                action: ACTION.USER_UPDATE,
                data: storageUser,
            })
        }
    }

    const logOut = async (): Promise<void> => {
        await window.localStorage.removeItem('user')
        dispatch({ action: ACTION.USER_UPDATE, data: DEFAULT_USER })
    }

    useEffect(() => {
        getStateUser()
    }, [])

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
                    <Route path={ROUTES.MY_BAG}>
                        <BagPage />
                    </Route>
                    <Route path={[ROUTES.NEW_REGISTRATION, ROUTES.HOME_SCREEN]}>
                        <NewRegistrationPage
                            signUpWithGoogle={() => onGoogleAuthorization()}
                        />
                    </Route>
                    <Route path={ROUTES.LOGOUT}>
                        <LogOutPage
                            logout={() => {
                                logOut()
                            }}
                        />
                    </Route>
                </Switch>
                <Menu />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
