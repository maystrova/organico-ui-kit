import React, { useContext } from 'react'
import { OrganicContext } from 'context/storeContext'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Link } from 'react-router-dom'

import { ROUTES } from 'services/route'

import { StyledHeader } from 'Pages/ProductPage/style'
import { StyledTitledHeader } from 'Pages/WishlistPage/style'
import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
} from 'Pages/CartPage/style'
import {
    StyledBag,
    StyledBagAction,
    StyledBagPage,
    StyledBagPageUserInfo,
} from './style'

import shopIcon from 'Pages/CartPage/pics/shop-icon.svg'
import addMore from 'Pages/BagPage/pics/add-more.svg'
import editAddress from 'Pages/BagPage/pics/edit-address.svg'

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
            <StyledBag>
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
                            {store.bag.length ? 'Add more' : 'Add something'}{' '}
                        </span>
                        <Icon size={ICON_SIZE.XX_SMALL} src={addMore} />
                    </StyledBagAction>
                </Link>
            </StyledBag>
            {store.bag.length > 0 && (
                <StyledBagPageUserInfo>
                    <h4>Address</h4>
                    <div>
                        <span>Home</span>
                        <span>{store.profile.address}</span>
                        <Icon size={ICON_SIZE.SMALL} src={editAddress} />
                    </div>
                    <h4>Note</h4>
                    <textarea
                        placeholder={
                            'Please check the product before packaging.'
                        }
                    ></textarea>
                </StyledBagPageUserInfo>
            )}
        </StyledBagPage>
    )
}

export { BagPage }
