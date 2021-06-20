import React, { useContext, useState } from 'react'
import { GlobalStyle, StyledLayout } from './style'
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { ProductPage } from 'Pages/ProductPage'
import { CartPage } from 'Pages/CartPage'
import { ProductType } from 'Pages/ProductPage/types'
import { WishlistPage } from 'Pages/WishlistPage'

import { paprika, products } from 'services/products/products'
import { ROUTES } from 'services/route'
import { CategoriesPage } from 'Pages/CategoriesPage'
import { CategoryPage } from 'Pages/CategoryPage'
import { Menu } from 'Components/Menu'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from '../../context/actions'

const Layout = () => {
    const [cart, setCart] = useState<ProductType[]>([])
    const [wishlist, setWishlist] = useState<ProductType[]>(products)
    const { store, dispatch } = useContext(OrganicContext)

    const addToWishlist = (product: ProductType): void => {
        const newWishlist = [product, ...wishlist]
        setWishlist(newWishlist)
    }

    const addToCart = (product: ProductType): void => {
        const newCart = [product, ...cart]
        setCart(newCart)
    }

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={ROUTES.PRODUCT} exact>
                        <ProductPage
                            onAddToWishlistClicked={productId => {
                                dispatch({
                                    action: ACTION.ADD_TO_WISHLIST,
                                    data: productId,
                                })
                            }}
                            backButton={() => {}}
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
                        <WishlistPage onBackButtonClick={() => {}} />
                    </Route>
                    <Route path={[ROUTES.CATEGORIES, '/']} exact>
                        <CategoriesPage
                            onBackToPreviousPageClicked={() => {}}
                        />
                    </Route>

                    <Route path={ROUTES.CATEGORY} exact>
                        <CategoryPage />
                    </Route>
                </Switch>
                <Menu />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
