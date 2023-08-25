import React from 'react';
import { RoutePath } from 'shared/config/route/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/calendar-info.svg';
import ProfileIcon from 'shared/assets/icons/user-circle.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsArray: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
];
