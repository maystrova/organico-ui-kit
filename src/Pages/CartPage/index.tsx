import React, { useContext, useState } from 'react'

import { OrganicContext } from 'context/storeContext'

import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ProductType } from 'Pages/ProductPage/types'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'

import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'
import { StyledEmptySpace, StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledHeader } from 'Pages/ProductPage/style'

import shopIcon from 'Pages/CartPage/pics/shop-icon.svg'
import { ACTION } from 'context/actions'

interface CartPageProps {
    cart: ProductType[]
}

const getTotalPrice = (cart: ProductType[]): number => {
    let totalPrice: number = 0

    for (const product of cart) {
        totalPrice += product.price * product.quantity
    }

    return totalPrice
}

const CartPage = ({ cart }: CartPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [addToBagButton, setAddToBagButton] = useState<string>('Add to bag')

    return (
        <StyledCartPage>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>My Cart</span>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledCartPageInfo>
                <StyledCardPageShop>
                    <StyledCardPageShopIcon>
                        <Icon size={ICON_SIZE.LARGE} src={shopIcon} />
                    </StyledCardPageShopIcon>
                    {cart.map(product => (
                        <h3 key={product.id}>{product.shop} </h3>
                    ))}
                </StyledCardPageShop>

                {cart.length && cart.filter(product => product.quantity > 0) ? (
                    cart.map(product => (
                        <ProductSticker
                            onCountChanged={newCount =>
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: { ...product, quantity: newCount },
                                })
                            }
                            product={product}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            key={product.id}
                        />
                    ))
                ) : (
                    <StyledEmptySpace>Your cart is empty :(</StyledEmptySpace>
                )}
            </StyledCartPageInfo>
            {cart.length > 0 && (
                <StyledCartPageFooter>
                    <StyledCartPageTotal>
                        <span>Total</span>
                        <h2>${cart.length && getTotalPrice(cart)}</h2>
                    </StyledCartPageTotal>
                    <Button
                        type={BUTTON_TYPE.PRIMARY}
                        title={addToBagButton}
                        onClick={() => {
                            dispatch({
                                action: ACTION.ADD_TO_BAG,
                                data: store.cart,
                            })
                            setAddToBagButton('Successfully added to bag!')
                        }}
                    />
                </StyledCartPageFooter>
            )}
        </StyledCartPage>
    )
}

export { CartPage, getTotalPrice }
