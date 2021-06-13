import React, { createContext, useReducer, ReactChild, Dispatch } from 'react'
import { products } from 'services/products/products'
import { ProductType } from '../Pages/ProductPage/types'
import { reducer } from './reducer'
import { ACTION } from './actions'

export interface StoreType {
    products: ProductType[]
    wishList: ProductType[]
    cart: ProductType[]
}

const INITIAL_STORE: StoreType = {
    products: products,
    cart: [],
    wishList: [],
}

export const OrganicContext = createContext<{
    store: StoreType
    dispatch: Dispatch<{ action: ACTION; data: any }>
}>({
    store: INITIAL_STORE,
    dispatch: () => null,
})

interface OrganicProviderProps {
    children:
        | React.ReactChildren
        | React.ReactChildren[]
        | React.ReactChild
        | ReactChild[]
}

export const OrganicProvider = ({ children }: OrganicProviderProps) => {
    const [store, dispatch] = useReducer(reducer, INITIAL_STORE)

    return (
        <OrganicContext.Provider value={{ store, dispatch }}>
            {children}
        </OrganicContext.Provider>
    )
}