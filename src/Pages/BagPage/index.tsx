import React, { useContext } from 'react'
import { OrganicContext } from 'context/storeContext'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Link } from 'react-router-dom'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
} from 'Pages/CartPage/style'
import { StyledBagPage, StyledBagAction } from './style'

import shopIcon from 'Pages/CartPage/pics/shop-icon.svg'
import addMore from 'Pages/BagPage/pics/add-more.svg'
import { ROUTES } from '../../services/route'

interface BagPageProps {}

const BagPage = ({}: BagPageProps) => {
    const { store } = useContext(OrganicContext)
    return (
        <StyledBagPage>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <div>My Bag</div>
                </StyledTitledHeader>
            </StyledHeader>
            <div>
                <StyledCardPageShop>
                    {store.bag.length ? (
                        <StyledCardPageShopIcon>
                            <Icon size={ICON_SIZE.LARGE} src={shopIcon} />
                        </StyledCardPageShopIcon>
                    ) : (
                        <div></div>
                    )}
                    {store.bag.map(product => (
                        <h3 key={product.id}>{product.shop} </h3>
                    ))}
                </StyledCardPageShop>
                {store.bag.map(product => (
                    <ProductSticker
                        product={product}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        key={product.id}
                    />
                ))}
                <Link to={ROUTES.CATEGORIES}>
                    <StyledBagAction>
                        <span>
                            {store.bag.length
                                ? 'Add more'
                                : 'Add something to bag'}{' '}
                        </span>
                        <Icon size={ICON_SIZE.XX_SMALL} src={addMore} />
                    </StyledBagAction>
                </Link>
            </div>
        </StyledBagPage>
    )
}

export { BagPage }
