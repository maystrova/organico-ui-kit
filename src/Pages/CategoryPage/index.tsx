import React from 'react'
import { useParams } from 'react-router-dom'

import { products } from '../../services/products/products'
import { ProductType } from '../ProductPage/types'
import { ProductCard } from '../../Components/ProductCard'
import { getBackgroundColorForProduct } from '../WishlistPage'

import { StyledCategoryPage } from './style'

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
    let params = useParams<{ category: string }>()

    const goods: ProductType[] = products.filter(
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
