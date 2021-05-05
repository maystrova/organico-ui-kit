import React from 'react'
import {
    StyledChatButton,
    StyledProductDetails,
    StyledProductFooter,
    StyledProductFooterButtons,
    StyledProductPage,
    StyledProductPageHeader,
    StyledProductPageMain,
    StyledProductPagePicture,
    StyledProductShop,
} from './style'
import { Button, BUTTON_TYPE } from '../../Button'
import { Banner } from '../../Banner'

import time from './pics/time-icon.svg'
import category from './pics/category-icon.svg'
import chat from '../../Layout/pics/chat.svg'
import wish from '../../Button/pics/wishlist.svg'

import { Icon, ICON_SIZE } from '../../Icon'

interface ProductPageProps {
    title?: string
    image?: string
    shop?: string
    price?: string
    details?: string
    backButton: () => void
    wishButton: () => void
}

const ProductPage = ({
    title,
    details,
    image,
    price,
    shop,
    backButton,
    wishButton,
}: ProductPageProps) => {
    return (
        <StyledProductPage>
            <StyledProductPageHeader>
                <Button
                    type={BUTTON_TYPE.BACK_TO_PREVIOUS_PAGE}
                    onClick={backButton}
                />
                <Button
                    type={BUTTON_TYPE.ADD_TO_WISHLIST}
                    onClick={wishButton}
                />
            </StyledProductPageHeader>
            <StyledProductPageMain>
                <StyledProductPagePicture>
                    <img src={image} alt='Product Picture' />
                </StyledProductPagePicture>
                <h2>{title}</h2>
                <StyledProductShop>{shop}</StyledProductShop>
                <h2>${price} /Kg</h2>
            </StyledProductPageMain>
            <StyledProductFooter>
                <StyledProductDetails>
                    <h4>Details</h4>
                    <p>{details}</p>
                </StyledProductDetails>
                <Banner
                    title={'Time Delivery'}
                    icon={time}
                    subtitle={'25-30 Min'}
                />
                <Banner
                    title={'Category'}
                    icon={category}
                    subtitle={'Vegetable'}
                />
                <StyledProductFooterButtons>
                    <Button
                        type={BUTTON_TYPE.ADD_TO_CART}
                        onClick={() => {}}
                        title={'Add to cart'}
                    />
                    <StyledChatButton onClick={() => {}}>
                        <Icon size={ICON_SIZE.MEDIUM} src={chat} alt={'Chat'} />
                    </StyledChatButton>
                </StyledProductFooterButtons>
            </StyledProductFooter>
        </StyledProductPage>
    )
}

export { ProductPage }
