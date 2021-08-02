export type RouteType = {
    title: string
    path: string
}

const ROUTES = {
    MY_CART: '/cart',
    EDIT_PROFILE: '/edit-profile',
    PAYMENT_METHOD: '/payment-method',
    HOME_SCREEN: '/home-screen',
    AUTHORIZATION_CODE: '/authorization-code',
    MY_WISHLIST: '/wishlist',
    RESET_PASSWORD: '/reset-password',
    FORGOT_PASSWORD: '/forgot-password',
    CUSTOMER_SERVICE: 'Customer Service',
    CHANGE_PASSWORD: '/change-password',
    CHANGE_NUMBER: '/change-number',
    CATEGORIES: '/categories',
    ADDRESS: '/address',
    CATEGORY: '/categories/:category',
    PRODUCT: '/product/:alias',
    LOGOUT: '/logout',
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
