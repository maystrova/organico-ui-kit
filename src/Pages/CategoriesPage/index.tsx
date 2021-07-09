import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { CategoryCard } from 'Components/CategoryCard'
import { Search } from 'Components/Search'

import { CategoryType } from 'Components/CategoryCard/types'
import { PRODUCTS_CATEGORY } from 'Pages/ProductPage/types'

import { StyledCardsList, StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledCategoriesPage } from './style'

import vegetables from 'services/products/pics/broccoli.png'
import fruits from 'services/products/pics/banana.png'
import meats from 'services/products/pics/meat.png'
import { OrganicContext } from '../../context/storeContext'

interface CategoriesPageProps {}

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

const CategoriesPage = ({}: CategoriesPageProps) => {
    const { store } = useContext(OrganicContext)
    const [searchValue, setSearchValue] = useState<string>('')

    const filteredProducts = store.products.filter(product => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <StyledCategoriesPage>
            <StyledTitledHeader>
                <BackToPreviousPage />
                <span>Categories</span>
            </StyledTitledHeader>
            <Search />

            <StyledCardsList>
                {categories.map(category => (
                    <Link
                        to={`/categories/${category.path}`}
                        key={category.title}
                    >
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
