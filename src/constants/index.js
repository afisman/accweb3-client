import { createCampaign, dashboard, logout, hourglass, profile } from '../assets';

export const navlinks = [
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgUrl: createCampaign,
        link: '/create-campaign',
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