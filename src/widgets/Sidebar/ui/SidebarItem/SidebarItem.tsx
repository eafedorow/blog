import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SidebarItemType;
    isCollapsed?: boolean;
}

export const SidebarItem = memo(({ item, isCollapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(cls.link, { [cls.collapsed]: isCollapsed }, [])}
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
        >
            <item.Icon className={cls.linkIcon} />
            {t(item.text)}
        </AppLink>
    );
});
