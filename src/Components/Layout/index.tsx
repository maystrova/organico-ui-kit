import React from 'react'
import { GlobalStyle, StyledLayout } from './style'
import { ProductPage } from '../Pages/ProductPage'
import paprika from './pics/paprika.png'

const Layout = () => {
    return (
        <StyledLayout>
            <GlobalStyle />
            <ProductPage
                title={'Paprika'}
                image={paprika}
                shop={'Vegshop'}
                price={'4.99'}
                details={
                    'Paprika is a fruit-producing plant that tastes sweet and slightly spicy from the eggplant or Solanaceae tribe. Its green, yellow, red, or purple fruit.'
                }
                backButton={() => {}}
                wishButton={() => {}}
            />
        </StyledLayout>
    )
}

export { Layout }
