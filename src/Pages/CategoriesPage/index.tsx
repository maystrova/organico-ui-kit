import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { CategoryCard } from '../../Components/CategoryCard'

import { StyledCardsList, StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledCategoriesPage } from './style'

import vegetables from 'services/products/pics/broccoli.png'
import fruits from 'services/products/pics/banana.png'
import meats from 'services/products/pics/meat.png'

interface CategoriesPageProps {
    onBackToPreviousPageClicked: () => void
    onCardClicked: () => void
}

const CategoriesPage = ({
    onBackToPreviousPageClicked,
    onCardClicked,
}: CategoriesPageProps) => {
    return (
        <StyledCategoriesPage>
            <StyledTitledHeader>
                <BackToPreviousPage onClick={onBackToPreviousPageClicked} />
                <span>Categories</span>
            </StyledTitledHeader>
            <StyledCardsList>
                <CategoryCard
                    onClick={onCardClicked}
                    title={'Vegetables'}
                    icon={vegetables}
                    backgroundColor={'rgba(118, 178, 38, 0.15)'}
                />
                <CategoryCard
                    onClick={onCardClicked}
                    title={'Fruits'}
                    icon={fruits}
                    backgroundColor={'rgba(243, 162, 12, 0.15)'}
                />
                <CategoryCard
                    onClick={onCardClicked}
                    title={'Meats'}
                    icon={meats}
                    backgroundColor={'rgba(227, 85, 63, 0.15)'}
                />
            </StyledCardsList>
        </StyledCategoriesPage>
    )
}

export { CategoriesPage }
