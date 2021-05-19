import React, { useState } from 'react'
import { GlobalStyle, StyledLayout } from './style'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ProductPage } from '../Pages/ProductPage'
import { ROUTES } from '../../sevices/route'
import { CartPage } from '../Pages/CartPage'
import { ProductType } from '../Pages/ProductPage/types'
import { WishlistPage } from '../Pages/WishlistPage'
import { BACKGROUND_COLOR_TYPE } from '../ProductCard'
import { paprika, products } from '../../sevices/products/products'

const Layout = () => {
    const [cart, setCart] = useState<ProductType[]>([])
    const [wishlist, setWishlist] = useState<ProductType[]>(products)

    // const onCartUpdate = (productId: ProductType,) => {
    //     const newCart = [
    //         ...cart,
    //     ]
    // }

    const addToWishlist = (product: ProductType): void => {
        const newWishlist = [product, ...wishlist]
        setWishlist(newWishlist)
    }

    const deleteFromWishlist = (product: ProductType): void => {
        const newWishlist: ProductType[] = {
            ...wishlist,
        }
        setWishlist(newWishlist)
    }

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={ROUTES.DETAIL} exact>
                        <ProductPage
                            product={paprika}
                            backButton={() => {}}
                            onAddToCartClick={productId => setCart([])}
                            onWishButtonClicked={product =>
                                addToWishlist(product)
                            }
                        />
                    </Route>
                    <Route path={ROUTES.MY_CART} exact>
                        <CartPage products={cart} />
                    </Route>
                    <Route path={ROUTES.MY_WISHLIST} exact>
                        <WishlistPage
                            products={wishlist}
                            onWishClicked={deleteFromWishlist}
                            backgroundColor={BACKGROUND_COLOR_TYPE.PINK}
                            onBackButtonClicked={() => {}}
                        />
                    </Route>
                </Switch>
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
