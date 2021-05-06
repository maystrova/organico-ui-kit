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
    StyledProductPageInfo,
    StyledProductPageTitles,
} from './style'
import { Button, BUTTON_TYPE } from '../../Button'
import { Banner } from '../../Banner'

import time from './pics/time-icon.svg'
import category from './pics/category-icon.svg'
import chat from '../../Layout/pics/chat.svg'

import { Icon, ICON_SIZE } from '../../Icon'
import { BackToPreviousPage } from '../../BackToPreviousPage'
import { AddToWishlist } from '../../AddToWishlist'
import { Count } from '../../Count'

interface ProductPageProps {
    title: string
    image: string
    shop: string
    price: number
    details: string
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
                <BackToPreviousPage onClick={backButton} />
                <AddToWishlist onClick={wishButton} />
            </StyledProductPageHeader>
            <StyledProductPageMain>
                <StyledProductPagePicture>
                    <img src={image} alt='Product Picture' />
                </StyledProductPagePicture>
                <StyledProductPageInfo>
                    <StyledProductPageTitles>
                        <h2>{title}</h2>
                        <StyledProductShop>{shop}</StyledProductShop>
                        <h2>${price} /Kg</h2>
                    </StyledProductPageTitles>
                    <div>
                        <Count
                            onAddClick={() => {}}
                            onRemoveClick={() => {}}
                            count={1}
                        />
                    </div>
                </StyledProductPageInfo>
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
