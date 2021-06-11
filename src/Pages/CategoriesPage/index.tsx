import React from 'react'
import { Link } from 'react-router-dom'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { CategoryCard } from '../../Components/CategoryCard'

import { CategoryType } from '../../Components/CategoryCard/types'
import { PRODUCTS_CATEGORY } from '../ProductPage/types'

import { StyledCardsList, StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledCategoriesPage } from './style'

import vegetables from 'services/products/pics/broccoli.png'
import fruits from 'services/products/pics/banana.png'
import meats from 'services/products/pics/meat.png'

interface CategoriesPageProps {
    onBackToPreviousPageClicked: () => void
}

const categories: CategoryType[] = [
    {
        title: 'Vegetables',
        icon: vegetables,
        backgroundColor: 'rgba(118, 178, 38, 0.15)',
        path: PRODUCTS_CATEGORY.VEGETABLES,
    },
    {
        title: 'Fruits',
        icon: fruits,
        backgroundColor: 'rgba(243, 162, 12, 0.15)',
        path: PRODUCTS_CATEGORY.FRUITS,
    },
    {
        title: 'Meats',
        icon: meats,
        backgroundColor: 'rgba(227, 85, 63, 0.15)',
        path: PRODUCTS_CATEGORY.MEATS,
    },
]

const CategoriesPage = ({
    onBackToPreviousPageClicked,
}: CategoriesPageProps) => {
    return (
        <StyledCategoriesPage>
            <StyledTitledHeader>
                <BackToPreviousPage onClick={onBackToPreviousPageClicked} />
                <span>Categories</span>
            </StyledTitledHeader>
            <StyledCardsList>
                {categories.map(category => (
                    <Link to={`/categories/${category.path}`}>
                        <CategoryCard
                            title={category.title}
                            icon={category.icon}
                            backgroundColor={category.backgroundColor}
                        />
                    </Link>
                ))}
            </StyledCardsList>
        </StyledCategoriesPage>
    )
}

export { CategoriesPage }
