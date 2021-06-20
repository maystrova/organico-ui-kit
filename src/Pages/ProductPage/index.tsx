import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { Button, BUTTON_TYPE } from 'Components/Button'
import { Banner } from 'Components/Banner'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { AddToWishlist } from 'Components/AddToWishlist'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from 'Components/Count'
import { ProductType } from './types'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'

import {
    StyledChatButton,
    StyledHeader,
    StyledProductAddToCard,
    StyledProductDetails,
    StyledProductFooter,
    StyledProductPage,
    StyledProductPageInfo,
    StyledProductPageMain,
    StyledProductPagePicture,
    StyledProductShop,
    StyledProductTitles,
} from './style'

import time from './pics/time-icon.svg'
import categoryIcon from './pics/category-icon.svg'
import chat from 'Components/Layout/pics/chat.svg'

interface ProductPageProps {
    backButton: () => void
    onAddToCartClick: (productId: string) => void
    onAddToWishlistClicked: (productId: string) => void
}

const ProductPage = ({
    backButton,
    onAddToCartClick,
    onAddToWishlistClicked,
}: ProductPageProps) => {
    const [isAddedToWishList, setAddToWishList] = useState<boolean>(false)
    const { store } = useContext(OrganicContext)

    let params = useParams<{ alias: string }>()

    const product: ProductType | undefined = store.products.find(
        product => product.alias === params.alias,
    )

    console.log(params)
    console.log(product)
    console.log(store.products)

    return (
        <StyledProductPage>
            {product && (
                <>
                    <StyledHeader>
                        <BackToPreviousPage onClick={backButton} />
                        <AddToWishlist
                            product={product}
                            isAdded={isAddedToWishList}
                            onClick={() => {
                                onAddToWishlistClicked(product.id)
                                setAddToWishList(!isAddedToWishList)
                            }}
                        />
                    </StyledHeader>
                    <StyledProductPageMain>
                        <StyledProductPagePicture>
                            <img src={product.image} alt='Product Picture' />
                        </StyledProductPagePicture>
                        <StyledProductPageInfo>
                            <StyledProductTitles>
                                <h2>{product.title}</h2>
                                <StyledProductShop>
                                    {product.shop}
                                </StyledProductShop>
                                <h2>${product.price} /Kg</h2>
                            </StyledProductTitles>
                            <div>
                                <Count
                                    fontSize={COUNT_FONTSIZE.PRODUCT_PAGE}
                                    width={COUNTING_SIZE.PRODUCT_PAGE}
                                    height={COUNTING_SIZE.PRODUCT_PAGE}
                                />
                            </div>
                        </StyledProductPageInfo>
                    </StyledProductPageMain>
                    <StyledProductFooter>
                        <StyledProductDetails>
                            <h4>Details</h4>
                            <p>{product.details}</p>
                        </StyledProductDetails>
                        <Banner
                            title={'Time Delivery'}
                            icon={time}
                            subtitle={'25-30 Min'}
                        />
                        <Banner
                            title={'Category'}
                            icon={categoryIcon}
                            subtitle={'Vegetable'}
                        />
                        <StyledProductAddToCard>
                            <Button
                                type={BUTTON_TYPE.PRIMARY}
                                onClick={() => onAddToCartClick(product.id)}
                                title={'Add to cart'}
                            />
                            <StyledChatButton onClick={() => {}}>
                                <Icon
                                    size={ICON_SIZE.MEDIUM}
                                    src={chat}
                                    alt={'Chat'}
                                />
                            </StyledChatButton>
                        </StyledProductAddToCard>
                    </StyledProductFooter>
                </>
            )}
        </StyledProductPage>
    )
}

export { ProductPage }
