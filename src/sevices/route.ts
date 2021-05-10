export type RouteType = {
    title: string
    path: string
}

const ROUTES = {
    DETAIL: '/detail',
    MY_CART: '/my-cart',
    HOME_SCREEN: '/home-screen',
    MY_WISHLIST: '/my-wishlist',
    CATEGORY_VEGETABLES: '/category-vegetables',
    MY_COUPON: '/my-coupon',
    SEARCH_VIEW: '/search-view',
    SEARCH_RESULT: '/search-result',
    EXPLORE_VIEW: '/explore-view',
    MY_BAG: '/my-bag',
    MY_ORDERS_ONGOING: '/my-orders-ongoing',
    ORDER_STATUS_RECEIVED: '/order-status-received',
    ORDER_STATUS_CONFIRMED: '/order-status-confirmed',
    ORDER_STATUS_ON_DELIVERY: '/order-status-on-delivery',
    ORDER_STATUS_COMPLETED: '/order-status-completed',
    MY_ORDERS_HISTORY: '/my-orders-history',
    PROFILE: '/profile',
    SPLASH_SCREEN: '/splash-screen',
    SIGN_IN: '/sign-in',
    NEW_REGISTRATION: '/new-registration',
}

export { ROUTES }
