import { dashboard, logout, hourglass, profile } from '../assets';

export const navlinks = [
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
    },


    {
        name: 'profile',
        imgUrl: profile,
        link: '/profile',
    }
    ,
    {
        name: 'hourglass',
        imgUrl: hourglass,
        link: '/finished',
    },
    {
        name: 'logout',
        imgUrl: logout,
        link: '/disconnect',
        disabled: true,
    },

];