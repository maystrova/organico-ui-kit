export type RouteType = {
    title: string
    path: string
}

const ROUTES = {
    DETAIL: '/product',
    MY_CART: '/cart',
    HOME_SCREEN: '/home-screen',
    MY_WISHLIST: '/wishlist',
    CATEGORIES: '/categories',
    CATEGORY: '/categories/:category',
    // CATEGORY_VEGETABLES: '/category/vegetables',
    // CATEGORY_FRUITS: '/category/fruits',
    // CATEGORY_MEAT: '/category/meat',

    MY_COUPON: '/coupon',
    SEARCH_VIEW: '/search-view',
    SEARCH_RESULT: '/search-result',
    EXPLORE_VIEW: '/explore-view',
    MY_BAG: '/bag',
    MY_ORDERS_ONGOING: '/orders-ongoing',
    ORDER_STATUS_RECEIVED: '/order-status-received',
    ORDER_STATUS_CONFIRMED: '/order-status-confirmed',
    ORDER_STATUS_ON_DELIVERY: '/order-status-on-delivery',
    ORDER_STATUS_COMPLETED: '/order-status-completed',
    MY_ORDERS_HISTORY: '/orders-history',
    PROFILE: '/profile',
    SPLASH_SCREEN: '/splash-screen',
    SIGN_IN: '/sign-in',
    NEW_REGISTRATION: '/new-registration',
}

export { ROUTES }
