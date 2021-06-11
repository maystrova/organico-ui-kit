import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../services/products/products'
import { ProductType } from '../ProductPage/types'

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
    let params = useParams<{ category: string }>()
    console.log(params)

    const goods: ProductType[] = products.filter(
        product => product.category === params.category,
    )
    console.log(goods)

    return (
        <div>
            {goods.map(product => {
                return <div>{product.title}</div>
            })}
        </div>
    )
}

export { CategoryPage }
