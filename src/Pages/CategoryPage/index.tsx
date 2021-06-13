import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { ProductType } from '../ProductPage/types'
import { ProductCard } from '../../Components/ProductCard'
import { getBackgroundColorForProduct } from '../WishlistPage'
import { OrganicContext } from 'context/storeContext'

import { StyledCategoryPage } from './style'

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
    const store = useContext(OrganicContext)

    let params = useParams<{ category: string }>()

    const goods: ProductType[] = store.products.filter(
        product => product.category === params.category,
    )

    return (
        <StyledCategoryPage>
            {goods.map(product => {
                return (
                    <ProductCard
                        isAdded={false}
                        type={getBackgroundColorForProduct(product.title)}
                        key={product.id}
                        product={product}
                        isShowAction={true}
                        onWishClick={() => {}}
                    />
                )
            })}
        </StyledCategoryPage>
    )
}

export { CategoryPage }
