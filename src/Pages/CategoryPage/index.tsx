import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductType } from 'Pages/ProductPage/types'
import { ProductCard } from 'Components/ProductCard'
import { getBackgroundColorForProduct } from 'Pages/WishlistPage'
import { OrganicContext } from 'context/storeContext'

import { ACTION } from 'context/actions'

import { StyledCategoryPage } from './style'
import { Search } from '../../Components/Search'
import { StyledEmptySpace } from '../WishlistPage/style'

const CategoryPage = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [searchValue, setSearchValue] = useState<string>('')

    let params = useParams<{ category: string }>()

    const goods: ProductType[] = store.products.filter(
        product => product.category === params.category,
    )

    const filteredProducts = goods.filter(product => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    // const filteredProducts = store.products.filter(product => {
    //     return product.title.toLowerCase().includes(searchValue.toLowerCase())
    // })

    return (
        <div>
            <Search onValueTape={event => setSearchValue(event.target.value)} />
            <StyledCategoryPage>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => {
                        const isAddedToWishlist: boolean = store.wishList.some(
                            wishlistProduct =>
                                wishlistProduct.id === product.id,
                        )

                        return (
                            <ProductCard
                                isAdded={isAddedToWishlist}
                                type={getBackgroundColorForProduct(
                                    product.title,
                                )}
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
                    })
                ) : (
                    <StyledEmptySpace>Nothing Found :(</StyledEmptySpace>
                )}
            </StyledCategoryPage>
        </div>
    )
}

export { CategoryPage }
