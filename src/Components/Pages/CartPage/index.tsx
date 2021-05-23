import React, { useState } from 'react'
import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageHeader,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'
import { ProductSticker } from 'Components/ProductSticker'
import { broccoli, carrot } from 'sevices/products/products'
import { Icon, ICON_SIZE } from 'Components/Icon'
import shopIcon from './pics/shop-icon.svg'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ProductType } from '../ProductPage/types'
import { BACKGROUND_COLOR_TYPE } from 'Components/ProductCard'

interface CartPageProps {
    products: ProductType[]
}

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

                {/*{products.map(product => {*/}
                {/*    return (*/}
                {/*        // <ProductSticker*/}
                {/*        //    product={product}*/}
                {/*        //    backgroundColor={BACKGROUND_COLOR_TYPE.WHITE}*/}
                {/*        // />*/}
                {/*    )*/}
                {/*})}*/}

                <ProductSticker
                    product={broccoli}
                    backgroundColor={BACKGROUND_COLOR_TYPE.GREEN}
                />
                <ProductSticker
                    product={carrot}
                    backgroundColor={BACKGROUND_COLOR_TYPE.ORANGE}
                />
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
