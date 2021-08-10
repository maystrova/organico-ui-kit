import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import {
    getUser,
    getUserBag,
    getUserCart,
    getUserWishlist,
    User,
} from 'services/user'

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

import { ForgotPasswordPage } from 'Pages/ForgotPasswordPage'
import { AuthorizationCodePage } from 'Pages/AuthorizationCodePage'
import { ResetPasswordPage } from 'Pages/ResetPasswordPage'
import { ChangeNumberPage } from 'Pages/ChangeNumberPage'
import { ChangePasswordPage } from 'Pages/ChangePasswordPage'
import { WelcomePage } from 'Pages/WelcomePage'

import { GlobalStyle, StyledLayout, StyledSwitchMode } from './style'

import light from 'Components/Layout/pics/light-mode.svg'
import dark from 'Components/Layout/pics/dark-mode.png'
import firebase from 'firebase/app'
import { getSearchHistoryList } from '../../services/searchHistory'

const Layout = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (theme === 'light') {
            dispatch({ action: ACTION.SWITCH_THEME, data: DARK })
        } else {
            dispatch({ action: ACTION.SWITCH_THEME, data: LIGHT })
        }
    }, [theme])

    const getStateUser = async (): Promise<void> => {
        const storageUser = await getUser()
        const storageWishlist = await getUserWishlist()
        const storageCart = await getUserCart()
        const storageSearchHistory = await getSearchHistoryList()
        const storageBag = await getUserBag()
        if (storageUser) {
            dispatch({
                action: ACTION.USER_UPDATE,
                data: storageUser,
            })
            dispatch({ action: ACTION.WISHLIST_UPDATE, data: storageWishlist })
            dispatch({ action: ACTION.CART_UPDATE, data: storageCart })
            dispatch({
                action: ACTION.UPDATE_SEARCH_HISTORY,
                data: storageSearchHistory,
            })

            setUser(storageUser)
        }
    }

    useEffect(() => {
        getStateUser()
    }, [])

    const onSignInSubmit = () => {}
    //
    //
    const signInWithPhoneNumber = () => {
        firebase.auth().languageCode = 'it'
        firebase.auth().useDeviceLanguage()
    }
    //
    // const verifier = window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button')
    //
    //         const phoneNumber = getPhoneNumberFromUserInput();
    //         const appVerifier = window.recaptchaVerifier;
    //         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //           .then((confirmationResult) => {
    //               // SMS sent. Prompt user to type the code from the message, then sign the
    //               // user in with confirmationResult.confirm(code).
    //               window.confirmationResult = confirmationResult;
    //               // ...
    //           }).catch((error) => {
    //             // Error; SMS not sent
    //             // ...
    //         });
    //         }
    //
    //
    //     }

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
                        <CartPage cart={store.cart} />
                    </Route>
                    <Route path={ROUTES.MY_WISHLIST} exact>
                        <WishlistPage wishlist={store.wishList} />
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
                    <Route path={ROUTES.RESET_PASSWORD}>
                        <ResetPasswordPage />
                    </Route>
                    <Route path={ROUTES.CHANGE_NUMBER}>
                        <ChangeNumberPage />
                    </Route>
                    <Route path={ROUTES.CHANGE_PASSWORD}>
                        <ChangePasswordPage />
                    </Route>
                    <Route path={ROUTES.WELCOME_PAGE}>
                        <WelcomePage
                            onPhoneNumberConfirm={phoneNumber =>
                                onSignInSubmit()
                            }
                        />
                    </Route>
                </Switch>
                <Menu />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
