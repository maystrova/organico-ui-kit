import React, { useState } from 'react'
import { GlobalStyle, StyledLayout } from './style'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ProductPage } from 'Pages/ProductPage'
import { CartPage } from 'Pages/CartPage'
import { ProductType } from 'Pages/ProductPage/types'
import { WishlistPage } from 'Pages/WishlistPage'

import { paprika, products } from 'services/products/products'
import { ROUTES } from 'services/route'
import { CategoriesPage } from 'Pages/CategoriesPage'
import { CategoryPage } from 'Pages/CategoryPage'
import { Menu } from 'Components/Menu'

const Layout = () => {
    const [cart, setCart] = useState<ProductType[]>([])
    const [wishlist, setWishlist] = useState<ProductType[]>(products)

    const addToWishlist = (product: ProductType): void => {
        const newWishlist = [product, ...wishlist]
        setWishlist(newWishlist)
    }

    const addToCart = (product: ProductType): void => {
        const newCart = [product, ...cart]
        setCart(newCart)
    }

    // const deleteFromWishlist = (productIdForDelete: string): void => {
    //     const newWishlist: ProductType[] = wishlist.filter(
    //         product => product.id !== productIdForDelete,
    //     )
    //
    //     setWishlist(newWishlist)
    // }

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={[ROUTES.DETAIL, '/']} exact>
                        <ProductPage
                            product={paprika}
                            backButton={() => {}}
                            onAddToCartClick={product => addToCart(product)}
                            onWishButtonClicked={product =>
                                addToWishlist(product)
                            }
                        />
                    </Route>
                    <Route path={ROUTES.MY_CART} exact>
                        <CartPage />
                    </Route>
                    <Route path={ROUTES.MY_WISHLIST} exact>
                        <WishlistPage onBackButtonClick={() => {}} />
                    </Route>
                    <Route path={ROUTES.CATEGORIES} exact>
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
