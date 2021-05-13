import React, { useState } from 'react'
import { GlobalStyle, StyledLayout } from './style'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ProductPage } from '../Pages/ProductPage'
import { ROUTES } from '../../sevices/route'
import { CartPage } from '../Pages/CartPage'
import { PRODUCTS_CATEGORY, ProductType } from '../Pages/ProductPage/types'

const Layout = () => {
    const [cart, setCart] = useState<ProductType[]>([])

    // const onCartUpdate = (productId: ProductType,) => {
    //     const newCart = [
    //         ...cart,
    //     ]
    // }

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={ROUTES.DETAIL} exact>
                        <ProductPage
                            id={''}
                            category={PRODUCTS_CATEGORY.VEGETABLES}
                            title={'Paprika'}
                            image={''}
                            shop={'Vegshop'}
                            price={4.99}
                            details={
                                'Paprika is a fruit-producing plant that tastes sweet and slightly spicy from the eggplant or Solanaceae tribe. Its green, yellow, red, or purple fruit.'
                            }
                            backButton={() => {}}
                            wishButton={() => {}}
                            onAddToCartClick={productId => setCart([])}
                        />
                    </Route>
                    <Route path={ROUTES.MY_CART} exact>
                        <CartPage products={cart} />
                    </Route>
                </Switch>
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
