import React, { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { SidebarItemsArray } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemsArray.map((item) => (
        <SidebarItem
            item={item}
            isCollapsed={isCollapsed}
            key={item.path}
        />
    )), [isCollapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
        >
            <div className={cls.linksList}>
                { itemsList }
            </div>

            <Button
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                rectangle
                size={ButtonSize.XL}
            >
                {isCollapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher
                    className={cls.themeSwitcher}
                />
                <LangSwitcher
                    className={cls.lang}
                    short={isCollapsed}
                />
            </div>
        </div>
    );
});
