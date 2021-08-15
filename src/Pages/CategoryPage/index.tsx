import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductType } from 'Pages/ProductPage/types'
import { ProductCard } from 'Components/ProductCard'
import { getBackgroundColorForProduct } from 'Pages/WishlistPage'
import { Search } from 'Components/Search'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { ACTION } from 'context/actions'

import { OrganicContext } from 'context/storeContext'
import { StyledCategoryPage } from './style'
import { StyledEmptySpace } from 'Pages/WishlistPage/style'
import {
    StyledHistoryIcon,
    StyledSearchHistory,
    StyledSearchHistoryAction,
    StyledSearchHistoryItem,
} from '../CategoriesPage/style'

import historyIcon from 'Components/Search/pics/history.svg'

interface CategoryPageProps {
    searchHistory: string[]
}

const CategoryPage = ({ searchHistory }: CategoryPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)
    const [searchValue, setSearchValue] = useState<string>('')
    const [isShowSearchHistory, setIsShowSearchHistory] = useState<boolean>(
        false,
    )

    let params = useParams<{ category: string }>()

    const goods: ProductType[] = store.products.filter(
        product => product.category === params.category,
    )

    const filteredProducts = goods.filter(product => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div>
            <StyledSearchHistoryAction>
                <Search
                    onValueTaped={event => setSearchValue(event.target.value)}
                    value={searchValue}
                />
                {isShowSearchHistory && (
                    <StyledSearchHistory>
                        {searchHistory.map(item => {
                            return (
                                <StyledSearchHistoryItem
                                    onClick={() => {
                                        setSearchValue(`${item}`)
                                        setIsShowSearchHistory(false)
                                    }}
                                >
                                    <StyledHistoryIcon>
                                        <Icon
                                            size={ICON_SIZE.SMALL}
                                            src={historyIcon}
                                        />
                                    </StyledHistoryIcon>

                                    {item}
                                </StyledSearchHistoryItem>
                            )
                        })}
                    </StyledSearchHistory>
                )}
            </StyledSearchHistoryAction>
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
