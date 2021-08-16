import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import firebase from 'firebase/app'

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
import { getSearchHistoryList } from 'services/searchHistory'

import { WelcomePage } from 'Pages/WelcomePage'

import { GlobalStyle, StyledLayout, StyledSwitchMode } from './style'
import light from 'Components/Layout/pics/light-mode.svg'
import dark from 'Components/Layout/pics/dark-mode.png'

enum THEMES {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

const Layout = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [theme, setTheme] = useState<THEMES>(THEMES.DARK)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (theme === THEMES.LIGHT) {
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

        dispatch({
            action: ACTION.GET_SEARCH_HISTORY,
            data: storageSearchHistory,
        })

        const storageBag = await getUserBag()
        if (storageUser) {
            dispatch({
                action: ACTION.USER_UPDATE,
                data: storageUser,
            })
            dispatch({ action: ACTION.WISHLIST_UPDATE, data: storageWishlist })
            dispatch({ action: ACTION.CART_UPDATE, data: storageCart })

            setUser(storageUser)
        }
    }

    useEffect(() => {
        getStateUser()
    }, [])

    const onSignInSubmit = () => {}

    const handleSwitchTheme = (): void => {
        const body = document.getElementsByTagName('body')
        const newTheme: THEMES =
            theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT

        body[0].setAttribute('class', theme)
        setTheme(newTheme)
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
                <StyledSwitchMode onClick={handleSwitchTheme}>
                    <Icon
                        alt={'Switch mode'}
                        size={ICON_SIZE.X_MEDIUM}
                        src={theme === THEMES.LIGHT ? light : dark}
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

                    <Route
                        path={[ROUTES.CATEGORIES, '/', ROUTES.HOME_SCREEN]}
                        exact
                    >
                        <CategoriesPage searchHistory={store.searchHistory} />
                    </Route>

                    <Route path={ROUTES.CATEGORY} exact>
                        <CategoryPage searchHistory={store.searchHistory} />
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
                    <Route path={ROUTES.NEW_REGISTRATION}>
                        <NewRegistrationPage />
                    </Route>
                    <Route path={ROUTES.LOGOUT}>
                        <LogOutPage />
                    </Route>
                    <Route path={ROUTES.SIGN_IN}>
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
