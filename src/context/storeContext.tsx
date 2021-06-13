import React, { createContext, ReactChild } from 'react'
import { products } from 'services/products/products'
import { ProductType } from '../Pages/ProductPage/types'

interface StoreType {
    products: ProductType[]
    wishList: ProductType[]
    cart: ProductType[]
}

const INITIAL_STORE: StoreType = {
    products: products,
    cart: [],
    wishList: [],
}

export const OrganicContext = createContext(INITIAL_STORE)

interface OrganicProviderProps {
    children:
        | React.ReactChildren
        | React.ReactChildren[]
        | React.ReactChild
        | ReactChild[]
}

export const OrganicProvider = ({ children }: OrganicProviderProps) => {
    return (
        <OrganicContext.Provider value={INITIAL_STORE}>
            {children}
        </OrganicContext.Provider>
    )
}
