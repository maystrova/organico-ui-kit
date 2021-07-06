import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { OrganicContext } from 'context/storeContext'
import { ROUTES } from 'services/route'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { ProfileActionSticker } from 'Components/ProfileActionSticker'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { getTotalPrice } from 'Pages/CartPage'

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
    StyledBagPageAddress,
    StyledBagPageFooter,
    StyledBagPageFooterPrice,
    StyledBagPageInfoWrapper,
    StyledBagPageNote,
    StyledBagPageTotal,
    StyledBagPageUserInfo,
    StyledEditAddress,
} from './style'

import shopIcon from 'Pages/CartPage/pics/shop-icon.svg'
import addMore from 'Pages/BagPage/pics/add-more.svg'
import edit from 'Pages/BagPage/pics/edit-address.svg'
import coupon from 'Pages/BagPage/pics/coupon.svg'
import paymentMethod from 'Components/ProfileActionSticker/pics/payment-method.svg'
import { ACTION } from '../../context/actions'

interface BagPageFooter {
    title: string
    amount: string
}

const BagPage = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [editAddress, setEditAddress] = useState<string>(
        store.profile.address,
    )
    const [showEdit, setShowEdit] = useState<boolean>(false)

    const BAG_PAGE_FOOTER: BagPageFooter[] = [
        { title: 'Subtotal', amount: `$${getTotalPrice(store.bag)}` },
        { title: 'Delivery Charge', amount: '$1' },
        { title: 'Coupon', amount: '-$1' },
        { title: 'Total', amount: `$${getTotalPrice(store.bag)}` },
    ]

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
                        onCountChanged={newCount =>
                            dispatch({
                                action: ACTION.UPDATE_COUNT_IN_BAG,
                                data: { ...product, quantity: newCount },
                            })
                        }
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
                <StyledBagPageUserInfo
                >
                    <h4>Address</h4>
                    <StyledBagPageInfoWrapper>
                        <StyledBagPageAddress>
                            <div>
                                {' '}
                                <h4>Home</h4>
                                {showEdit ? (
                                    <StyledEditAddress>
                                        {' '}
                                        <textarea
                                            placeholder={editAddress}
                                            value={editAddress}
                                            onChange={event =>
                                                setEditAddress(
                                                    event.target.value,
                                                )
                                            }
                                        />
                                        <button
                                            onClick={() => {
                                                setEditAddress(editAddress)
                                                setShowEdit(false)
                                            }}
                                        >
                                            Save
                                        </button>
                                    </StyledEditAddress>
                                ) : (
                                    <span onClick={() => setShowEdit(true)}>
                                        {editAddress}
                                    </span>
                                )}
                            </div>
                            <button onClick={() => setShowEdit(true)}>
                                <Icon size={ICON_SIZE.SMALL} src={edit} />
                            </button>
                        </StyledBagPageAddress>
                    </StyledBagPageInfoWrapper>
                    <h4>Note</h4>
                    <StyledBagPageNote
                        placeholder={
                            'Please check the product before packaging.'
                        }
                    ></StyledBagPageNote>
                    <h4>Coupon</h4>
                    <StyledBagPageInfoWrapper>
                        <ProfileActionSticker
                            icon={coupon}
                            title={'Free Shipping'}
                            path={ROUTES.MY_COUPON}
                        />
                    </StyledBagPageInfoWrapper>
                    <h4>Payment Method</h4>
                    <StyledBagPageInfoWrapper>
                        <ProfileActionSticker
                            icon={paymentMethod}
                            title={'Credit Card'}
                            path={ROUTES.PAYMENT_METHOD}
                        />
                    </StyledBagPageInfoWrapper>
                    <StyledBagPageFooter>
                        <StyledBagPageTotal>
                            {BAG_PAGE_FOOTER.map(s => {
                                return (
                                    <StyledBagPageFooterPrice>
                                        <span>{s.title}</span>
                                        <span>{s.amount}</span>
                                    </StyledBagPageFooterPrice>
                                )
                            })}
                        </StyledBagPageTotal>

                        <Button
                            type={BUTTON_TYPE.PRIMARY}
                            title={'Order Now'}
                            width={'100%'}
                            onClick={() => {}}
                        />
                    </StyledBagPageFooter>
                </StyledBagPageUserInfo>
            )}
        </StyledBagPage>
    )
}

export { BagPage }
