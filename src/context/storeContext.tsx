import React, { createContext, useReducer, ReactChild, Dispatch } from 'react'
import { products } from 'services/products/products'
import { ProductType } from 'Pages/ProductPage/types'
import { reducer } from './reducer'
import { ACTION } from './actions'
import { UserType } from 'services/user'
import { DEFAULT_USER } from 'services/user'
import { LIGHT, ThemeType } from 'configs/theme'
import { ThemeProvider } from 'styled-components'

export interface StoreType {
    products: ProductType[]
    wishList: ProductType[]
    cart: ProductType[]
    profile: UserType
    bag: ProductType[]
    theme: ThemeType
}

const INITIAL_STORE: StoreType = {
    products: products,
    cart: [],
    wishList: [],
    bag: [],
    profile: DEFAULT_USER,
    theme: LIGHT,
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
        <ThemeProvider theme={store.theme}>
            <OrganicContext.Provider value={{ store, dispatch }}>
                {children}
            </OrganicContext.Provider>
        </ThemeProvider>
    )
}
