import React from 'react'
import { GlobalStyle, StyledLayout } from './style'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ProductPage } from '../Pages/ProductPage'
import { ROUTES } from '../../sevices/route'
import { CartPage } from '../Pages/CartPage'
import { PRODUCTS_CATEGORY } from '../Pages/ProductPage/types'

const Layout = () => {
    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={ROUTES.DETAIL} exact>
                        <ProductPage
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
                        />
                    </Route>
                    <Route path={ROUTES.MY_CART} exact>
                        <CartPage />
                    </Route>
                </Switch>
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
