import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductType } from 'Pages/ProductPage/types'
import { ProductCard } from 'Components/ProductCard'
import { getBackgroundColorForProduct } from 'Pages/WishlistPage'
import { OrganicContext } from 'context/storeContext'

import { StyledCategoryPage } from './style'
import { ACTION } from 'context/actions'

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    let params = useParams<{ category: string }>()

    const goods: ProductType[] = store.products.filter(
        product => product.category === params.category,
    )

    return (
        <StyledCategoryPage>
            {goods.map(product => {
                const isAddedToWishlist: boolean = store.wishList.some(
                    wishlistProduct => wishlistProduct.id === product.id,
                )

                return (
                    <ProductCard
                        isAdded={isAddedToWishlist}
                        type={getBackgroundColorForProduct(product.title)}
                        product={product}
                        key={product.id}
                        isShowAction={true}
                        onWishClick={productId => {
                            dispatch({
                                action: ACTION.ADD_TO_WISHLIST,
                                data: productId,
                            })
                            isAddedToWishlist &&
                                dispatch({
                                    action: ACTION.DELETE_FROM_WISHLIST,
                                    data: productId,
                                })
                        }}
                    />
                )
            })}
        </StyledCategoryPage>
    )
}

export { CategoryPage }
