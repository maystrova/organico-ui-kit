import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'

import { StyledCardsList, StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledCategoriesPage } from './style'
import { ProductType } from '../ProductPage/types'

import vegetables from 'services/products/pics/broccoli.png'
import { CategoryCard } from '../../Components/CategoryCard'
import { PRODUCT_TYPE } from '../../services/products/products'

interface CategoriesPageProps {
    onBackToPreviousPageClicked: () => void
    products: ProductType[]
}

const CategoriesPage = ({
    onBackToPreviousPageClicked,
    products,
}: CategoriesPageProps) => {
    return (
        <StyledCategoriesPage>
            <StyledTitledHeader>
                <BackToPreviousPage onClick={onBackToPreviousPageClicked} />
                <span>Categories</span>
            </StyledTitledHeader>
            <StyledCardsList>
                <CategoryCard
                    title={'Vegetables'}
                    icon={vegetables}
                    backgroundColor={PRODUCT_TYPE.BROCCOLI}
                />
            </StyledCardsList>
        </StyledCategoriesPage>
    )
}

export { CategoriesPage }
