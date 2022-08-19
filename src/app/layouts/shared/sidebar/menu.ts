import {MenuItem} from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: '/'
    },
    {
        id: 3,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'ri-calendar-2-line',
        link: '/calendar'
    },
    {
        id: 4,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'ri-chat-1-line',
        link: '/chat'
    },
    {
        id: 5,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'ri-store-2-line',
        subItems: [
            {
                id: 6,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/ecommerce/products',
                parentId: 5
            },
            {
                id: 8,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/ecommerce/orders',
                parentId: 5
            },
            {
                id: 9,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/ecommerce/customers',
                parentId: 5
            },
            {
                id: 10,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/ecommerce/cart',
                parentId: 5
            },
            {
                id: 11,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/ecommerce/checkout',
                parentId: 5
            },
            {
                id: 12,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/ecommerce/shops',
                parentId: 5
            },
            {
                id: 13,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/ecommerce/add-product',
                parentId: 5
            },
        ]
    },
    {
        id: 14,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'ri-mail-send-line',
        subItems: [
            {
                id: 15,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/email/inbox',
                parentId: 14
            },
            {
                id: 16,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/email/read',
                parentId: 14
            }
        ]
    },
    {
        id: 15,
        label: 'MENUITEMS.KANBAN.TEXT',
        icon: 'ri-artboard-2-line',
        link: '/kanban-board'
    },
    {
        id: 16,
        isLayout: true
    },
    {
        id: 17,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 18,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'ri-account-circle-line',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/pages/login-1',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/pages/register-1',
                parentId: 18
            },
            {
                id: 21,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/pages/recoverpwd-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 18
            }
        ]
    },
    {
        id: 23,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'ri-profile-line',
        subItems: [
            {
                id: 24,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 23
            },
            {
                id: 25,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 23
            },
            {
                id: 26,
                label: 'MENUITEMS.UTILITY.LIST.COOMINGSOON',
                link: '/pages/coming-soon',
                parentId: 23
            },
            {
                id: 27,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 23
            },
            {
                id: 28,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 23
            },
            {
                id: 29,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 23
            },
            {
                id: 30,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 23
            },
            {
                id: 31,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 23
            },
        ]
    },


    {
        id: 68,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'ri-map-pin-line',
        subItems: [
            {
                id: 69,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 68
            },
            {
                id: 70,
                label: 'Leaflet Maps',
                link: '/maps/leaflet',
                parentId: 68
            },
        ]
    },
];
