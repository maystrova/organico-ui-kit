import React, { useState } from 'react'

import { broccoli, carrot, PRODUCT_TYPE } from 'services/products/products'

import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ProductType } from 'Pages/ProductPage/types'
import { products } from 'services/products/products'

import shopIcon from './pics/shop-icon.svg'

import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageHeader,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'

interface CartPageProps {
    products: ProductType[]
}

const goods: ProductType[] = products

const CartPage = ({ products }: CartPageProps) => {
    const [productCards, setProductCards] = useState<ProductType[]>([])

    return (
        <StyledCartPage>
            <StyledCartPageHeader>My Cart</StyledCartPageHeader>
            <StyledCartPageInfo>
                <StyledCardPageShop>
                    <StyledCardPageShopIcon>
                        <Icon size={ICON_SIZE.LARGE} src={shopIcon} />
                    </StyledCardPageShopIcon>

                    <h3>{broccoli.shop}</h3>
                </StyledCardPageShop>

                {goods.map(product => (
                    <ProductSticker
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}

                {/*<ProductSticker*/}
                {/*    product={broccoli}*/}
                {/*    type={PRODUCT_TYPE.BROCCOLI}*/}
                {/*/>*/}
                {/*<ProductSticker product={carrot} type={PRODUCT_TYPE.CARROT} />*/}
            </StyledCartPageInfo>
            <StyledCartPageFooter>
                <StyledCartPageTotal>
                    <span>Total</span>
                    <h2>$9.98</h2>
                </StyledCartPageTotal>
                <Button
                    type={BUTTON_TYPE.PRIMARY}
                    title={'Add to bag'}
                    onClick={() => {}}
                />
            </StyledCartPageFooter>
        </StyledCartPage>
    )
}

export { CartPage }
