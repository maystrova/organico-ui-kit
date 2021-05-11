import React from 'react'
import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageHeader,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'
import { ProductCard } from '../../ProductCard'
import { broccoli, carrot } from '../../../sevices/products/products'
import { Icon, ICON_SIZE } from '../../Icon'
import shopIcon from './pics/shop-icon.svg'
import { Button, BUTTON_TYPE } from '../../Button'

interface CartPageProps {}

const CartPage = ({}: CartPageProps) => {
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
                <ProductCard
                    title={broccoli.title}
                    image={broccoli.image}
                    price={broccoli.price}
                    shop={broccoli.shop}
                    category={broccoli.category}
                />
                <ProductCard
                    title={carrot.title}
                    image={carrot.image}
                    price={carrot.price}
                    shop={carrot.shop}
                    category={carrot.category}
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
