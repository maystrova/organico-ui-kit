import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { ProductType } from 'Pages/ProductPage/types'
import { ProductCard } from 'Components/ProductCard'
import { getBackgroundColorForProduct } from 'Pages/WishlistPage'
import { OrganicContext } from 'context/storeContext'

import { StyledCategoryPage } from './style'
import { ACTION } from 'context/actions'

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)

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
                    <Link to={`/product/${product.alias}`} key={product.id}>
                        <ProductCard
                            onAddToCartClick={productId => {
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: productId,
                                })
                            }}
                            isAdded={isAddedToWishlist}
                            type={getBackgroundColorForProduct(product.title)}
                            product={product}
                            isShowAction={true}
                            onWishClick={productId => {
                                dispatch({
                                    action: ACTION.ADD_TO_WISHLIST,
                                    data: productId,
                                })
                            }}
                        />
                    </Link>
                )
            })}
        </StyledCategoryPage>
    )
}

export { CategoryPage }
